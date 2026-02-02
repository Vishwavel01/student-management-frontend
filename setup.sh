#!/bin/bash

echo "=================================="
echo "Student Management System Setup"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install Node.js v18 or higher."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ npm is not installed. Please install npm."
    exit 1
fi

echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "✅ Dependencies installed successfully!"
echo ""
echo "=================================="
echo "Setup Complete!"
echo "=================================="
echo ""
echo "To start the development server, run:"
echo "  npm start"
echo ""
echo "Or:"
echo "  ng serve"
echo ""
echo "The application will be available at:"
echo "  http://localhost:4200"
echo ""
echo "Make sure your backend is running on:"
echo "  http://localhost:8080"
echo ""
