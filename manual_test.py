#!/usr/bin/env python3

import requests
import json
import sys
from urllib.parse import urljoin

class ReactAppTester:
    def __init__(self, base_url="http://localhost:5176"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, test_func):
        """Run a single test"""
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            success = test_func()
            if success:
                self.tests_passed += 1
                print(f"✅ Passed")
            else:
                print(f"❌ Failed")
            return success
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False

    def test_app_loads(self):
        """Test if the main app loads"""
        response = requests.get(self.base_url, timeout=10)
        if response.status_code == 200:
            html_content = response.text
            # Check for essential elements
            checks = [
                'id="root"' in html_content,
                'thecodelancer' in html_content or 'CS Student Program' in html_content,
                'main.tsx' in html_content,
                'DOCTYPE html' in html_content.upper()
            ]
            return all(checks)
        return False

    def test_static_assets(self):
        """Test if static assets are accessible"""
        assets_to_check = [
            '/src/main.tsx',
            '/src/App.tsx',
            '/src/index.css'
        ]
        
        for asset in assets_to_check:
            url = urljoin(self.base_url, asset)
            response = requests.get(url, timeout=5)
            if response.status_code != 200:
                print(f"❌ Asset {asset} not accessible")
                return False
        return True

    def test_vite_dev_server(self):
        """Test if Vite dev server is running properly"""
        # Check for Vite client
        vite_client_url = urljoin(self.base_url, '/@vite/client')
        response = requests.get(vite_client_url, timeout=5)
        return response.status_code == 200

    def test_react_components(self):
        """Test if React components are being served"""
        component_url = urljoin(self.base_url, '/src/components/Header.tsx')
        response = requests.get(component_url, timeout=5)
        if response.status_code == 200:
            content = response.text
            return 'Header' in content and 'React' in content
        return False

def main():
    print("🚀 Starting React TypeScript Application Tests")
    print("=" * 50)
    
    tester = ReactAppTester()
    
    # Run tests
    tester.run_test("Application Loads", tester.test_app_loads)
    tester.run_test("Static Assets Accessible", tester.test_static_assets)
    tester.run_test("Vite Dev Server Running", tester.test_vite_dev_server)
    tester.run_test("React Components Served", tester.test_react_components)
    
    # Print results
    print(f"\n📊 Test Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed! The application is running correctly.")
        return 0
    else:
        print("⚠️  Some tests failed. Check the application setup.")
        return 1

if __name__ == "__main__":
    sys.exit(main())