import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ 
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      minHeight: '100vh', 
      padding: '2rem',
      color: '#333'
    }}>
      <Head>
        <title>UmarxUploader - Secure Drive to Drive Transfer Tool</title>
        <meta name="description" content="Securely transfer your Google Drive data with UmarxUploader. We respect your privacy and never access your data." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <main style={{ 
        maxWidth: '800px', 
        margin: '0 auto', 
        background: '#fff', 
        borderRadius: '16px', 
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)', 
        padding: '3rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ 
            width: '80px', 
            height: '80px', 
            background: 'linear-gradient(135deg, #4285f4, #34a853)', 
            borderRadius: '20px', 
            margin: '0 auto 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem'
          }}>
            📁
          </div>
          <h1 style={{ 
            color: '#1a202c', 
            marginBottom: '0.5rem', 
            fontSize: '2.5rem',
            fontWeight: '700',
            letterSpacing: '-0.025em'
          }}>
            UmarxUploader
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#718096',
            fontWeight: '500'
          }}>
            Secure Drive-to-Drive Transfer Tool
          </p>
        </div>

        {/* Privacy Assurance */}
        <div style={{ 
          background: 'linear-gradient(135deg, #e6fffa, #f0fff4)', 
          border: '2px solid #38a169',
          padding: '1.5rem', 
          borderRadius: '12px', 
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#2f855a', marginBottom: '0.5rem', fontSize: '1.3rem' }}>
            🔒 Your Privacy is Protected
          </h3>
          <p style={{ fontSize: '1.1rem', margin: 0, color: '#2d3748' }}>
            <strong>We do NOT access, store, view, or share your data.</strong><br />
            All transfers happen directly between your Google Drives through Google's secure infrastructure.
          </p>
        </div>

        {/* Sign-in Process */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            color: '#2d3748', 
            marginBottom: '1.5rem',
            fontSize: '1.8rem',
            fontWeight: '600'
          }}>
            📋 How to Sign In (Step by Step)
          </h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ 
              background: '#fff5f5', 
              border: '1px solid #fed7d7',
              padding: '1rem', 
              borderRadius: '8px',
              marginBottom: '1rem'
            }}>
              <h4 style={{ color: '#c53030', margin: '0 0 0.5rem 0' }}>
                ⚠️ Important: Google will show a security warning
              </h4>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>
                This is normal! Google shows this warning for all unverified apps, even safe ones like ours.
              </p>
            </div>
          </div>

          <ol style={{ 
            marginBottom: '1.5rem', 
            paddingLeft: '1.5rem',
            lineHeight: '1.8'
          }}>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Click the "Launch UmarxUploader" button below</strong>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              Google will show: <span style={{ 
                color: '#e53e3e', 
                background: '#fed7d7', 
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                fontFamily: 'monospace'
              }}>
                "This app isn't verified"
              </span>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Click "Advanced"</strong> (small text at the bottom left)
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Click "Go to [App Name] (unsafe)"</strong> - Don't worry, it's safe!
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <strong>Sign in with your Google account</strong>
            </li>
            <li>
              <strong>Grant permissions</strong> when prompted (needed for Drive access)
            </li>
          </ol>
        </div>

        {/* Why the warning appears */}
        <div style={{ 
          background: '#f7fafc', 
          border: '1px solid #e2e8f0',
          padding: '1.5rem', 
          borderRadius: '8px', 
          marginBottom: '2rem'
        }}>
          <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>
            🤔 Why does Google show this warning?
          </h3>
          <ul style={{ paddingLeft: '1.2rem', margin: 0 }}>
            <li>Our app isn't published on Google Workspace Marketplace (costs $$$)</li>
            <li>Google shows this for ALL unpublished apps - even completely safe ones</li>
            <li>This is Google's way of making sure you know what you're authorizing</li>
            <li><strong>Your data never leaves Google's servers</strong> - we just help move it between your drives</li>
          </ul>
        </div>

        {/* Launch Button */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <a 
            href="https://script.google.com/macros/s/AKfycbzVgsOWqUD28F0nsJsKYHN2WptsAZO2kX2H3Uo31uDPsXHvImsnn9-YqzG1_24mLslv/exec" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              display: 'inline-block', 
              background: 'linear-gradient(135deg, #4285f4, #34a853)', 
              color: '#fff', 
              padding: '1rem 2.5rem', 
              borderRadius: '12px', 
              fontSize: '1.3rem', 
              fontWeight: '600', 
              textDecoration: 'none', 
              boxShadow: '0 8px 20px rgba(66, 133, 244, 0.3)',
              transition: 'all 0.3s ease',
              border: 'none',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 12px 25px rgba(66, 133, 244, 0.4)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 20px rgba(66, 133, 244, 0.3)';
            }}
          >
            🚀 Launch UmarxUploader
          </a>
        </div>

        {/* Additional Reassurance */}
        <div style={{ 
          borderTop: '1px solid #e2e8f0',
          paddingTop: '1.5rem',
          fontSize: '0.95rem', 
          color: '#4a5568',
          textAlign: 'center'
        }}>
          <h4 style={{ color: '#2d3748', marginBottom: '1rem' }}>
            🛡️ Additional Security Information
          </h4>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: 0,
            display: 'grid',
            gap: '0.5rem'
          }}>
            <li>✅ Zero data collection or storage</li>
            <li>✅ Open source and transparent</li>
            <li>✅ Works entirely within Google's ecosystem</li>
            <li>✅ You can revoke access anytime in your Google Account settings</li>
          </ul>
          
          <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <p style={{ margin: 0 }}>
              <strong>Questions or concerns?</strong> Contact us at{' '}
              <a href="mailto:support@umarxuploader.com" style={{ color: '#3182ce' }}>
                support@umarxuploader.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
