import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Jobs = () => {
    const { axios } = useAppContext();
    const [showModal, setShowModal] = useState(false);
    const [selectedRole, setSelectedRole] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        experience: '',
        resumeUrl: ''
    })

    const handleApplyClick = (role) => {
        setSelectedRole(role);
        setShowModal(true);
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/job/apply', { ...formData, role: selectedRole });
            if (data.success) {
                toast.success(data.message);
                setShowModal(false);
                setFormData({ name: '', email: '', phone: '', experience: '', resumeUrl: '' });
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const jobRoles = [
        {
            title: "Delivery Partner",
            location: "Khammam, Telangana",
            type: "Full Time / Part Time",
            description: "Join our fleet and help deliver fresh groceries to our customers' doorsteps."
        },
        {
            title: "Store Manager",
            location: "Khammam, Telangana",
            type: "Full Time",
            description: "Manage daily operations, staff, and ensure a premium shopping experience."
        },
        {
            title: "Inventory Associate",
            location: "Khammam, Telangana",
            type: "Full Time",
            description: "Maintain stock levels, manage incoming shipments, and ensure product quality."
        },
        {
            title: "Customer Support Executive",
            location: "Remote / Office",
            type: "Full Time",
            description: "Help customers with their queries and resolve order-related issues."
        },
        {
            title: "Quality Control Specialist",
            location: "Khammam, Telangana",
            type: "Full Time",
            description: "Ensure that all products meeting our high standards of freshness and quality."
        }
    ]

  return (
    <div className='flex flex-col items-center gap-10 py-10 md:py-20'>
      <div className='text-center text-2xl pt-10 text-gray-500 uppercase tracking-widest'>
        <p>Current <span className='text-gray-700 font-semibold'>Openings</span></p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4'>
        {jobRoles.map((job, index) => (
          <div key={index} className='border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4 bg-white'>
            <div>
                <h3 className='text-xl font-semibold text-gray-800'>{job.title}</h3>
                <p className='text-primary font-medium text-sm'>{job.location} | {job.type}</p>
            </div>
            <p className='text-gray-600 text-sm leading-relaxed'>{job.description}</p>
            <button onClick={() => handleApplyClick(job.title)} className='mt-auto w-full py-2.5 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-lg font-medium'>
                Apply Now
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4'>
            <div className='bg-white p-8 rounded-2xl w-full max-w-md relative animate-in fade-in zoom-in duration-300'>
                <button onClick={() => setShowModal(false)} className='absolute top-4 right-4 text-gray-400 hover:text-gray-600'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path></svg>
                </button>
                <h2 className='text-2xl font-bold text-gray-800 mb-2'>Apply for {selectedRole}</h2>
                <p className='text-sm text-gray-500 mb-6'>Please fill in your details to apply.</p>
                
                <form onSubmit={onFormSubmit} className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm font-medium text-gray-700'>Full Name</label>
                        <input required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className='border border-gray-300 p-2.5 rounded-lg outline-none focus:border-primary' type='text' placeholder='John Doe' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm font-medium text-gray-700'>Email Address</label>
                        <input required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className='border border-gray-300 p-2.5 rounded-lg outline-none focus:border-primary' type='email' placeholder='john@example.com' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm font-medium text-gray-700'>Phone Number</label>
                        <input required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className='border border-gray-300 p-2.5 rounded-lg outline-none focus:border-primary' type='tel' placeholder='+91 1234567890' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm font-medium text-gray-700'>Experience (Years)</label>
                        <input required value={formData.experience} onChange={(e) => setFormData({...formData, experience: e.target.value})} className='border border-gray-300 p-2.5 rounded-lg outline-none focus:border-primary' type='text' placeholder='e.g. 2 years' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-sm font-medium text-gray-700'>Resume Link / Bio</label>
                        <textarea value={formData.resumeUrl} onChange={(e) => setFormData({...formData, resumeUrl: e.target.value})} className='border border-gray-300 p-2.5 rounded-lg outline-none focus:border-primary resize-none' rows='3' placeholder='Link to resume or brief bio...'></textarea>
                    </div>
                    <button type='submit' className='mt-2 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dull transition-colors'>
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
      )}

      <div className='mt-16 text-center max-w-2xl px-4'>
        <p className='text-gray-500 italic'>"Join GrocerGo and be part of the future of grocery shopping. We value passion, integrity, and a commitment to excellence."</p>
      </div>
    </div>
  )
}

export default Jobs
