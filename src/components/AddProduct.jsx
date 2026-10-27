import React, { useState } from 'react';

function AddProduct({ onAddProduct, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    category: "Men's Perfume",
    price: '',
    quantity: '',
    rating: '4.8',
    image: '',
    description: '',
    specifications: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.quantity) {
      alert('Please fill in required fields!');
      return;
    }

    onAddProduct({
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
      rating: Number(formData.rating),
      image: formData.image || '/VersaceEros.jpg',
      description: formData.description || 'Premium quality fragrance.',
      specifications: formData.specifications || 'Standard size bottle.'
    });

    onClose();
  };

  const fieldStyle = { display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px' };
  const inputStyle = { backgroundColor: '#111827', border: '1px solid #1e3a8a', color: '#fff', padding: '8px', borderRadius: '6px' };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '450px' }}>
        <h3 style={{ marginTop: 0, color: '#3b82f6' }}>Add New Product</h3>
        
        <form onSubmit={handleSubmit}>
          <div style={fieldStyle}>
            <label style={{ fontSize: '0.85rem', color: '#93c5fd' }}>Product Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} placeholder="e.g. Dior Sauvage" required />
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ ...fieldStyle, flex: 1 }}>
              <label style={{ fontSize: '0.85rem', color: '#93c5fd' }}>Category</label>
              <select name="category" value={formData.category} onChange={handleChange} style={inputStyle}>
                <option value="Men's Perfume">Men's Perfume</option>
                <option value="Women's Perfume">Women's Perfume</option>
                <option value="Unisex">Unisex</option>
              </select>
            </div>
            
            <div style={{ ...fieldStyle, flex: 1 }}>
              <label style={{ fontSize: '0.85rem', color: '#93c5fd' }}>Price (₱)</label>
              <input type="number" name="price" value={formData.price} onChange={handleChange} style={inputStyle} placeholder="3500" required />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ ...fieldStyle, flex: 1 }}>
              <label style={{ fontSize: '0.85rem', color: '#93c5fd' }}>Quantity</label>
              <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} style={inputStyle} placeholder="10" required />
            </div>
            
            <div style={{ ...fieldStyle, flex: 1 }}>
              <label style={{ fontSize: '0.85rem', color: '#93c5fd' }}>Rating</label>
              <input type="number" step="0.1" max="5" name="rating" value={formData.rating} onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          <div style={fieldStyle}>
            <label style={{ fontSize: '0.85rem', color: '#93c5fd' }}>Paste Image URL / Path</label>
            <input type="text" name="image" value={formData.image} onChange={handleChange} style={inputStyle} placeholder="/VersaceEros.jpg or https://..." />
          </div>

          <div style={fieldStyle}>
            <label style={{ fontSize: '0.85rem', color: '#93c5fd' }}>Description</label>
            <input type="text" name="description" value={formData.description} onChange={handleChange} style={inputStyle} placeholder="Short product description" />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '16px' }}>
            <button type="button" className="btn-cancel" onClick={onClose} style={{ backgroundColor: '#374151', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
            <button type="submit" className="btn-blue" style={{ backgroundColor: '#3b82f6', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' }}>Save Product</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;