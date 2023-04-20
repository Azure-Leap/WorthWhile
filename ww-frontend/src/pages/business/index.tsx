import { useState } from "react";

interface SignUpFormData {
  businessName: string;
  email: string;
  password: string;
  businessHours: string;
  address: string;
  description: string;
  socialMediaUrl: string;
}

const business = () => {
  const [formData, setFormData] = useState<SignUpFormData>({
    businessName: "",
    email: "",
    password: "",
    businessHours: "",
    address: "",
    description: "",
    socialMediaUrl: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // TODO: Add code to submit form data to backend
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <h1 className="text-2xl font-bold mb-4">
        Бизнесээ бүртгүүл, Мөнгөө үржүүл, Санхүүгийн эрх чөлөөнд хүр!!!!
      </h1>
      <br></br>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="businessName" className="block font-medium mb-1">
            Business Name
          </label>
          <input
            type="text"
            name="businessName"
            id="businessName"
            value={formData.businessName}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="businessHours" className="block font-medium mb-1">
            Business Hours
          </label>
          <input
            type="text"
            name="businessHours"
            id="businessHours"
            value={formData.businessHours}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="address" className="block font-medium mb-1">
            Address
          </label>
          <textarea
            name="address"
            id="address"
            value={formData.address}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div>
          <label htmlFor="description" className="block font-medium mb-1">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default business;
