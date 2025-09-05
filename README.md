# UmarxUploader - Drive to Drive Transfer Tool

🚀 **Live Demo**: [https://drive-to-drive-uploader.vercel.app/](https://drive-to-drive-uploader.vercel.app/)

A secure and user-friendly tool that enables seamless file transfers between Google Drive accounts. UmarxUploader helps users migrate data, backup files, or organize content across multiple Google Drive accounts without compromising privacy or security.

## 🎯 What is UmarxUploader?

UmarxUploader is a Google Apps Script-based application that facilitates direct file transfers between Google Drive accounts. The tool operates entirely within Google's ecosystem, ensuring your data never leaves Google's secure servers.

### Key Benefits:
- **🔒 100% Secure**: No data storage on external servers
- **🚀 Direct Transfer**: Files move directly between your Google Drives
- **👥 Multi-Account Support**: Transfer between different Google accounts
- **📁 Bulk Operations**: Handle multiple files and folders
- **🆓 Free to Use**: No subscription or hidden costs

## 🌟 Features

### Landing Page Features:
- ✅ Clear step-by-step sign-in instructions
- ✅ Detailed explanation of Google's security warnings
- ✅ Privacy and security assurances
- ✅ Professional, responsive design
- ✅ Custom branding with logo integration

### Core Tool Features:
- ✅ **Cross-Account Transfer**: Move files between different Google accounts
- ✅ **Folder Structure Preservation**: Maintains original organization
- ✅ **Progress Tracking**: Real-time transfer status updates
- ✅ **Error Handling**: Robust error recovery and reporting
- ✅ **Permission Management**: Respects file sharing settings

## 🚀 How It Works

1. **Access the Tool**: Visit our landing page and click "Launch App"
2. **Google Authentication**: Sign in with your Google account
3. **Grant Permissions**: Allow access to Google Drive (required for transfers)
4. **Select Source & Destination**: Choose files/folders and target location
5. **Transfer**: Monitor progress as files move between drives

## 🛡️ Privacy & Security

### Our Commitments:
- **No Data Collection**: We don't store, view, or access your files
- **Google Infrastructure**: All operations happen within Google's servers
- **Transparent Process**: Open about permissions and data handling
- **Revokable Access**: You can remove permissions anytime

### Google Security Warning:
When you first access the tool, Google may show a "This app isn't verified" warning. This is normal for developer applications and doesn't indicate any security risk. Our landing page provides clear instructions on how to safely proceed.

## 💻 Technical Details

- **Built with**: Google Apps Script, Next.js (Landing Page)
- **Deployment**: Vercel (Landing Page), Google Cloud (Core App)
- **Permissions Required**: Google Drive API access
- **Supported File Types**: All Google Drive supported formats
- **Transfer Limits**: Subject to Google Drive API quotas

## 🚀 Quick Deploy (Landing Page)

### Vercel Deployment
1. Fork this repository
2. Connect to Vercel
3. Deploy with default settings

### Local Development
```bash
# Clone the repository
git clone https://github.com/umarJ-max/Drive-To-Drive-Uploader.git

# Install dependencies
cd Drive-To-Drive-Uploader
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 📞 Support & Contact

- **Email**: [umerjutt5397@gmail.com](mailto:umerjutt5397@gmail.com)
- **Issues**: Report bugs or request features via GitHub Issues
- **Documentation**: Check our landing page for detailed usage instructions

## 🔧 Project Structure

```
Drive-To-Drive-Uploader/
├── pages/
│   ├── index.js          # Main landing page
│   └── _document.js      # HTML document structure
├── public/
│   └── favicon.png       # Website icon
├── package.json          # Dependencies and scripts
├── next.config.js        # Next.js configuration
└── README.md            # This file
```

## 📈 Use Cases

- **Account Migration**: Moving to a new Google account
- **Data Backup**: Creating copies across multiple drives
- **Organization**: Consolidating scattered files
- **Collaboration**: Sharing large datasets between team members
- **Storage Management**: Distributing files to manage space

## ⚡ Performance

- **Fast Transfers**: Optimized for Google's infrastructure
- **Concurrent Operations**: Multiple file transfers simultaneously
- **Resume Capability**: Handle interrupted transfers gracefully
- **Batch Processing**: Efficient handling of large file sets

---

**Made with ❤️ by [Umar J](https://github.com/umarJ-max)**

*UmarxUploader - Making Google Drive transfers simple, secure, and seamless.*
