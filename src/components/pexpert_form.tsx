import { useState, FormEvent, ChangeEvent } from 'react';
import '../css/pexpertForm.css';

const PetForm = () => {
  const initialFormState = {
    name: '',
    phone: '',
    email: '',
    timezone: '',
    petName: '',
    petType: '',
    petAge: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  const formatPhoneNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length === 0) return '';
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  const validateForm = () => {
    if (!formData.name.match(/^[A-Za-z\s]{1,35}$/)) {
      return false;
    }

    if (!formData.phone.match(/^\(\d{3}\) \d{3}-\d{4}$/)) {
      return false;
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      return false;
    }

    if (!formData.timezone) {
      return false;
    }

    if (!formData.petName || formData.petName.length > 35) {
      return false;
    }

    if (!formData.petType) {
      return false;
    }

    if (!formData.petAge || !formData.petAge.match(/^\d{1,2}$/)) {
      return false;
    }

    return true;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      alert("Your request has been successfully submitted! Please allow 1-2 business days for response.");
      setFormData(initialFormState);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let processedValue = value;

    if (name === 'phone') {
      processedValue = formatPhoneNumber(value);
    }
    if (name === 'name') {
      processedValue = value.replace(/[^A-Za-z\s]/g, '').slice(0, 35);
    }
    if (name === 'petAge') {
      processedValue = value.replace(/\D/g, '').slice(0, 2);
    }

    setFormData(prev => ({
      ...prev,
      [name]: processedValue
    }));
  };

  return (
    <>
      <h2 className="form-heading">Reach out for Pexpert Help!</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="First Last"
              className={`form-input ${formData.name ? 'filled' : ''}`}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Your Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="1234567890"
              className={`form-input ${formData.phone ? 'filled' : ''}`}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Your Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@example.com"
              className={`form-input ${formData.email ? 'filled' : ''}`}
              required
            />
          </div>

          <div className="form-group">
            <label  htmlFor="timezone" className="form-label">
              Your Time Zone
            </label>
            <select
              id="timezone"
              name="timezone"
              value={formData.timezone}
              onChange={handleChange}
              className={`form-select ${formData.timezone ? 'filled' : ''}`}
              required
            >
              <option role="presentation">Select Time Zone</option>
              <option value="PT">PT</option>
              <option value="MT">MT</option>
              <option value="CT">CT</option>
              <option value="ET">ET</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">
              Pet's Name
            </label>
            <input
              type="text"
              name="petName"
              value={formData.petName}
              onChange={handleChange}
              placeholder="Mittens"
              maxLength={35}
              className={`form-input ${formData.petName ? 'filled' : ''}`}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="petType" className="form-label">
              Pet Type
            </label>
            <select
              id="petType"
              name="petType"
              value={formData.petType}
              onChange={handleChange}
              className={`form-select ${formData.petType ? 'filled' : ''}`}
              required
            >
              <option role="presentation">Select Pet Type</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="fish">Fish</option>
              <option value="small-animal">Small Animal</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">
              Pet's Age
            </label>
            <input
              type="text"
              name="petAge"
              value={formData.petAge}
              onChange={handleChange}
              placeholder="0"
              className={`form-input ${formData.petAge ? 'filled' : ''}`}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default PetForm;