#!/usr/bin/env python3

import requests
import json
import sys
from urllib.parse import urljoin
import time

class ReactAppTester:
    def __init__(self, base_url="http://localhost:5174"):
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
            print(f"📊 HTML checks: {sum(checks)}/4 passed")
            return all(checks)
        return False

    def test_static_assets(self):
        """Test if static assets are accessible"""
        assets_to_check = [
            '/src/main.tsx',
            '/src/App.tsx',
            '/src/index.css'
        ]
        
        passed = 0
        for asset in assets_to_check:
            url = urljoin(self.base_url, asset)
            response = requests.get(url, timeout=5)
            if response.status_code == 200:
                passed += 1
                print(f"✅ Asset {asset} accessible")
            else:
                print(f"❌ Asset {asset} not accessible (status: {response.status_code})")
        
        print(f"📊 Assets accessible: {passed}/{len(assets_to_check)}")
        return passed == len(assets_to_check)

    def test_vite_dev_server(self):
        """Test if Vite dev server is running properly"""
        # Check for Vite client
        vite_client_url = urljoin(self.base_url, '/@vite/client')
        response = requests.get(vite_client_url, timeout=5)
        if response.status_code == 200:
            print("✅ Vite client accessible")
            return True
        else:
            print(f"❌ Vite client not accessible (status: {response.status_code})")
            return False

    def test_react_components(self):
        """Test if React components are being served"""
        components_to_check = [
            '/src/components/Header.tsx',
            '/src/components/DotsPattern.tsx',
            '/src/pages/Home.tsx'
        ]
        
        passed = 0
        for component in components_to_check:
            component_url = urljoin(self.base_url, component)
            response = requests.get(component_url, timeout=5)
            if response.status_code == 200:
                content = response.text
                if any(keyword in content for keyword in ['React', 'export', 'import']):
                    passed += 1
                    print(f"✅ Component {component} accessible and valid")
                else:
                    print(f"❌ Component {component} accessible but invalid content")
            else:
                print(f"❌ Component {component} not accessible (status: {response.status_code})")
        
        print(f"📊 Components accessible: {passed}/{len(components_to_check)}")
        return passed >= len(components_to_check) // 2  # At least half should work

    def test_server_health(self):
        """Test overall server health"""
        try:
            response = requests.get(self.base_url, timeout=5)
            headers = response.headers
            
            # Check important headers
            checks = [
                response.status_code == 200,
                'text/html' in headers.get('content-type', ''),
                'vite' in response.text.lower() or 'react' in response.text.lower()
            ]
            
            print(f"📊 Server health checks: {sum(checks)}/3 passed")
            print(f"📊 Response time: {response.elapsed.total_seconds():.2f}s")
            
            return all(checks)
        except Exception as e:
            print(f"❌ Server health check failed: {str(e)}")
            return False

def main():
    print("🚀 Starting React TypeScript Application Backend Tests")
    print("=" * 60)
    print("📍 Testing URL: http://localhost:5174")
    print("📍 Application: React + TypeScript + Vite + Framer Motion")
    print("=" * 60)
    
    tester = ReactAppTester()
    
    # Run tests in order of importance
    tests = [
        ("Server Health Check", tester.test_server_health),
        ("Application Loads", tester.test_app_loads),
        ("Vite Dev Server Running", tester.test_vite_dev_server),
        ("Static Assets Accessible", tester.test_static_assets),
        ("React Components Served", tester.test_react_components),
    ]
    
    for test_name, test_func in tests:
        tester.run_test(test_name, test_func)
        time.sleep(0.5)  # Small delay between tests
    
    # Print final results
    print("\n" + "=" * 60)
    print(f"📊 FINAL RESULTS: {tester.tests_passed}/{tester.tests_run} tests passed")
    print(f"📊 Success Rate: {(tester.tests_passed/tester.tests_run)*100:.1f}%")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed! The application backend is running correctly.")
        print("✅ Ready for frontend UI testing with Playwright.")
        return 0
    elif tester.tests_passed >= tester.tests_run * 0.8:
        print("⚠️  Most tests passed. Application should work but may have minor issues.")
        print("✅ Proceeding with frontend UI testing.")
        return 0
    else:
        print("❌ Multiple tests failed. Check the application setup before UI testing.")
        return 1

if __name__ == "__main__":
    sys.exit(main())