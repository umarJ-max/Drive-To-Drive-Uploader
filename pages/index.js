import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', 
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
      minHeight: '100vh', 
      padding: '20px'
    }}>
      <Head>
        <title>UmarxUploader - Drive to Drive Transfer</title>
        <meta name="description" content="Transfer files between Google Drive accounts safely and securely." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div style={{ 
        maxWidth: '720px', 
        margin: '0 auto'
      }}>
        
        {/* Header */}
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ 
            fontSize: '32px',
            fontWeight: '600',
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            margin: '0 0 8px 0'
          }}>
            UmarxUploader
          </h1>
          <p style={{ 
            fontSize: '18px', 
            color: '#6b7280',
            margin: 0
          }}>
            Transfer files between Google Drive accounts
          </p>
        </header>

        {/* Main Content Card */}
        <div style={{ 
          background: '#fff', 
          borderRadius: '12px', 
          padding: '32px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          border: '1px solid #e5e7eb',
          marginBottom: '24px'
        }}>
          
          {/* Privacy Notice */}
          <div style={{ 
            background: 'linear-gradient(135deg, #dbeafe, #f0f9ff)', 
            border: '1px solid #3b82f6',
            borderRadius: '8px',
            padding: '20px', 
            marginBottom: '32px',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-6px',
              left: '20px',
              background: '#3b82f6',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '12px',
              fontSize: '12px',
              fontWeight: '500'
            }}>
              🔒 SECURE
            </div>
            <h3 style={{ 
              color: '#1e40af', 
              fontSize: '16px',
              fontWeight: '600',
              margin: '8px 0 8px 0'
            }}>
              Your data stays private
            </h3>
            <p style={{ 
              color: '#1e3a8a', 
              margin: 0, 
              fontSize: '14px',
              lineHeight: '1.5'
            }}>
              We don't store, access, or view your files. Everything happens directly through Google's secure servers.
            </p>
          </div>

          {/* Instructions */}
          <h2 style={{ 
            fontSize: '20px',
            fontWeight: '600',
            color: '#1f2937',
            margin: '0 0 20px 0'
          }}>
            How to get started
          </h2>
          
          <div style={{ marginBottom: '24px' }}>
            <div style={{ 
              background: 'linear-gradient(135deg, #fef3c7, #fde68a)', 
              border: '1px solid #f59e0b',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '16px',
              borderLeft: '4px solid #f59e0b'
            }}>
              <p style={{ 
                margin: 0, 
                fontSize: '14px',
                color: '#92400e',
                fontWeight: '500'
              }}>
                ⚠️ Google will show a security warning - this is normal for developer apps
              </p>
            </div>
          </div>

          <ol style={{ 
            paddingLeft: '20px',
            margin: '0 0 32px 0',
            color: '#374151'
          }}>
            <li style={{ marginBottom: '8px' }}>
              Click "Launch App" below
            </li>
            <li style={{ marginBottom: '8px' }}>
              When you see "This app isn't verified", click <strong>Advanced</strong>
            </li>
            <li style={{ marginBottom: '8px' }}>
              Click <strong>"Go to UmarxUploader (unsafe)"</strong>
            </li>
            <li style={{ marginBottom: '8px' }}>
              Sign in and allow access to your Google Drive
            </li>
            <li>
              Start transferring your files
            </li>
          </ol>

          {/* Launch Button */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <a 
              href="https://script.google.com/macros/s/AKfycbzVgsOWqUD28F0nsJsKYHN2WptsAZO2kX2H3Uo31uDPsXHvImsnn9-YqzG1_24mLslv/exec" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                display: 'inline-block', 
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', 
                color: '#fff', 
                padding: '14px 28px', 
                borderRadius: '8px', 
                fontSize: '16px', 
                fontWeight: '600', 
                textDecoration: 'none',
                boxShadow: '0 4px 14px 0 rgba(59, 130, 246, 0.4)',
                transition: 'all 0.2s ease',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #2563eb, #1e40af)';
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 6px 20px 0 rgba(59, 130, 246, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(135deg, #3b82f6, #1d4ed8)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 14px 0 rgba(59, 130, 246, 0.4)';
              }}
            >
              🚀 Launch App
            </a>
          </div>

          {/* Why warning appears */}
          <details style={{ marginBottom: '20px' }}>
            <summary style={{ 
              cursor: 'pointer', 
              fontWeight: '500',
              color: '#374151',
              fontSize: '16px',
              padding: '8px 0',
              borderBottom: '1px solid #e5e7eb'
            }}>
              💡 Why does Google show a warning?
            </summary>
            <div style={{ 
              padding: '16px 0',
              color: '#6b7280',
              fontSize: '14px',
              lineHeight: '1.6',
              background: '#f9fafb',
              borderRadius: '6px',
              padding: '16px',
              marginTop: '8px'
            }}>
              <p>Google shows this warning for any app that isn't published in their official marketplace. It's their way of making sure you know what you're authorizing.</p>
              <p style={{ margin: '8px 0 0 0' }}>Our app works entirely within Google's systems - your files never leave Google's servers.</p>
            </div>
          </details>
        </div>

        {/* Footer */}
        <footer style={{ 
          textAlign: 'center',
          color: '#6b7280',
          fontSize: '14px',
          background: '#fff',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb'
        }}>
          <p>
            Questions? Email us at{' '}
            <a 
              href="mailto:umerjutt5397@gmail.com" 
              style={{ 
                color: '#3b82f6', 
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              umerjutt5397@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
