function Sidebar({ categories, products, activeCategory, onCategoryChange }) {
  const totalStock = products.reduce((sum, product) => sum + product.stock, 0)
  const lowStock = products.filter(
    (product) => product.stock > 0 && product.stock <= 5,
  ).length

  return (
    <aside className="sidebar">
      <a className="brand" href="#" aria-label="Northstar home">
        <span className="brand__mark">n</span>
        <span>northstar</span>
      </a>

      <div className="workspace-switcher">
        <span className="workspace-switcher__icon">N</span>
        <span className="workspace-switcher__text">
          <strong>Northstar Goods</strong>
          <small>Free plan</small>
        </span>
        <span className="workspace-switcher__chevron">⌄</span>
      </div>

      <nav className="side-nav" aria-label="Main navigation">
        <p className="nav-label">WORKSPACE</p>
        <button className="nav-item">
          <span className="nav-icon">⌂</span>
          Overview
        </button>
        <button className="nav-item nav-item--active">
          <span className="nav-icon">▦</span>
          Products
          <span className="nav-item__count">{products.length}</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">▤</span>
          Orders
          <span className="nav-item__count">4</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">♙</span>
          Customers
        </button>

        <div className="nav-section">
          <p className="nav-label">CATEGORIES</p>
          <button
            className={`category-link${activeCategory === 'All products' ? ' category-link--active' : ''}`}
            onClick={() => onCategoryChange('All products')}
          >
            <span className="category-dot category-dot--all" />
            All products
            <span className="category-link__count">{products.length}</span>
          </button>
          {categories.map((category, index) => {
            const count = products.filter(
              (product) => product.category === category,
            ).length

            return (
              <button
                className={`category-link${activeCategory === category ? ' category-link--active' : ''}`}
                key={category}
                onClick={() => onCategoryChange(category)}
              >
                <span className={`category-dot category-dot--${index + 1}`} />
                {category}
                <span className="category-link__count">{count}</span>
              </button>
            )
          })}
        </div>
      </nav>

      <div className="sidebar-bottom">
        <div className="stock-card">
          <div className="stock-card__heading">
            <span>Stock overview</span>
            <span className="stock-card__dots">···</span>
          </div>
          <strong>{totalStock} items</strong>
          <div className="stock-meter">
            <span style={{ width: `${Math.min(totalStock / 2, 100)}%` }} />
          </div>
          <p>
            <span className="stock-warning-dot" />
            {lowStock} products running low
          </p>
        </div>
        <button className="nav-item settings-link">
          <span className="nav-icon">⚙</span>
          Settings
        </button>
        <div className="profile">
          <span className="avatar avatar--profile">JD</span>
          <span className="profile__text">
            <strong>Jamie Davis</strong>
            <small>Owner</small>
          </span>
          <span className="profile__more">···</span>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
