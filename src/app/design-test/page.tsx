export default function DesignTestPage() {
  return (
    <main className="design-test">
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Popular Card Design Options</h1>

      <div className="design-options">
        {/* Option 1: Square corners (like products page) */}
        <div className="design-option">
          <h2>Option 1: Square Corners (Products Style)</h2>
          <div className="card-square">
            <div className="card-blob">
              <img src="/modern-lamp.png" alt="lamp" />
            </div>
            <h3>Modern Light</h3>
            <span>Hanging Light</span>
            <button>👁</button>
          </div>
          <style>{`
            .card-square {
              width: 260px;
              background: hsl(30, 25%, 14%);
              padding: 1rem;
              border-radius: 1rem;
            }
            .card-square .card-blob {
              background: hsl(0, 0%, 100%);
              height: 200px;
              border-radius: 5rem 5rem 0 0;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .card-square img {
              width: 120px;
            }
          `}</style>
        </div>

        {/* Option 2: Remove blob dome */}
        <div className="design-option">
          <h2>Option 2: Remove Blob Dome</h2>
          <div className="card-no-blob">
            <img src="/modern-lamp.png" alt="lamp" />
            <h3>Modern Light</h3>
            <span>Hanging Light</span>
            <button>👁</button>
          </div>
          <style>{`
            .card-no-blob {
              width: 260px;
              background: hsl(30, 25%, 14%);
              padding: 1rem;
              border-radius: 1rem;
            }
            .card-no-blob img {
              width: 120px;
              display: block;
              margin: 0 auto 1rem;
            }
          `}</style>
        </div>

        {/* Option 3: Simplify card */}
        <div className="design-option">
          <h2>Option 3: Simplify Card</h2>
          <div className="card-simple">
            <div className="card-simple-blob">
              <img src="/modern-lamp.png" alt="lamp" />
            </div>
            <h3>Modern Light</h3>
            <span>Hanging Light</span>
            <button>👁</button>
          </div>
          <style>{`
            .card-simple {
              width: 260px;
              background: hsl(30, 25%, 14%);
              padding: 1.5rem 1.5rem 1.5rem;
              border-radius: 0.5rem;
            }
            .card-simple-blob {
              background: hsl(0, 0%, 100%);
              border-radius: 0.5rem;
              padding: 1rem;
              display: flex;
              justify-content: center;
            }
            .card-simple img {
              width: 100px;
            }
          `}</style>
        </div>

        {/* Option 4: Match products page (same catalog card design) */}
        <div className="design-option">
          <h2>Option 4: Match Products Page</h2>
          <div className="card-catalog">
            <div className="card-catalog-blob">
              <img src="/modern-lamp.png" alt="lamp" />
            </div>
            <div className="card-catalog-body">
              <span className="card-category">Hanging</span>
              <h3>Modern Light</h3>
              <span className="card-subtitle">Premium Design</span>
            </div>
          </div>
          <style>{`
            .card-catalog {
              width: 260px;
              background: hsl(30, 25%, 14%);
              padding: 1rem;
              border-radius: 1rem;
              gap: 0.25rem;
            }
            .card-catalog-blob {
              background: hsl(0, 0%, 100%);
              width: 90px;
              height: 110px;
              border-radius: 5rem 5rem 0 0;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .card-catalog-body {
              flex: 1;
              text-align: center;
            }
            .card-category {
              font-size: 0.75rem;
              color: hsl(0, 0%, 70%);
            }
            .card-subtitle {
              font-size: 0.75rem;
            }
          `}</style>
        </div>

        {/* Option 5: Current design (dome) */}
        <div className="design-option">
          <h2>Option 5: Current (Dome Design)</h2>
          <div className="card-dome">
            <div className="card-dome-blob">
              <img src="/modern-lamp.png" alt="lamp" />
            </div>
            <h3>Modern Light</h3>
            <span>Hanging Light</span>
            <button>👁</button>
          </div>
          <style>{`
            .card-dome {
              width: 260px;
              background: hsl(30, 25%, 14%);
              padding: 0.75rem 0.75rem 1rem;
              border-radius: 9rem 9rem 0 0;
            }
            .card-dome-blob {
              background: hsl(0, 0%, 100%);
              height: 200px;
              border-radius: 8rem 8rem 0 0;
            }
            .card-dome img {
              width: 120px;
              display: block;
              margin: 0 auto;
            }
          `}</style>
        </div>
      </div>

      <style>{`
        .design-test {
          min-height: 100vh;
          padding: 2rem;
          background: hsl(0, 0%, 8%);
        }
        .design-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 2rem;
        }
        .design-option {
          text-align: center;
        }
        .design-option h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: hsl(0, 0%, 100%);
        }
        .design-option img {
          max-width: 100%;
        }
        .design-option h3 {
          font-size: 1.25rem;
          margin: 0.5rem 0;
          color: hsl(0, 0%, 100%);
        }
        .design-option span {
          font-size: 0.875rem;
          color: hsl(0, 0%, 70%);
        }
        .design-option button {
          margin-top: 1rem;
          padding: 0.5rem 1.5rem;
          background: hsl(30, 25%, 14%);
          border: none;
          border-radius: 0.5rem;
          color: white;
          font-size: 1rem;
          cursor: pointer;
        }
      `}</style>
    </main>
  );
}
