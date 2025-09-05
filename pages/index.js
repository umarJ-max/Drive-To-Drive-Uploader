import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', 
      background: '#fafbfc', 
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
            color: '#1f2937',
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
          borderRadius: '8px', 
          padding: '32px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb',
          marginBottom: '24px'
        }}>
          
          {/* Privacy Notice */}
          <div style={{ 
            background: '#f0f9ff', 
            border: '1px solid #0ea5e9',
            borderRadius: '6px',
            padding: '16px', 
            marginBottom: '32px'
          }}>
            <h3 style={{ 
              color: '#0c4a6e', 
              fontSize: '16px',
              fontWeight: '600',
              margin: '0 0 8px 0'
            }}>
              Your data stays private
            </h3>
            <p style={{ 
              color: '#1e40af', 
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
              background: '#fef3c7', 
              border: '1px solid #f59e0b',
              borderRadius: '6px',
              padding: '12px',
              marginBottom: '16px'
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
                background: '#3b82f6', 
                color: '#fff', 
                padding: '12px 24px', 
                borderRadius: '6px', 
                fontSize: '16px', 
                fontWeight: '500', 
                textDecoration: 'none',
                transition: 'background-color 0.2s',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.background = '#2563eb'}
              onMouseLeave={(e) => e.target.style.background = '#3b82f6'}
            >
              Launch App
            </a>
          </div>

          {/* Why warning appears */}
          <details style={{ marginBottom: '20px' }}>
            <summary style={{ 
              cursor: 'pointer', 
              fontWeight: '500',
              color: '#374151',
              fontSize: '16px'
            }}>
              Why does Google show a warning?
            </summary>
            <div style={{ 
              padding: '12px 0',
              color: '#6b7280',
              fontSize: '14px',
              lineHeight: '1.6'
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
          fontSize: '14px'
        }}>
          <p>
            Questions? Email us at{' '}
            <a 
              href="mailto:umerjutt5397@gmail.com" 
              style={{ color: '#3b82f6', textDecoration: 'none' }}
            >
              umerjutt5397@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
