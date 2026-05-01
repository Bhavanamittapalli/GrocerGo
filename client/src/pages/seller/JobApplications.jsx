import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const JobApplications = () => {
    const { axios } = useAppContext()
    const [applications, setApplications] = useState([])

    const fetchApplications = async () => {
        try {
            const { data } = await axios.get('/api/job/list')
            if (data.success) {
                setApplications(data.applications)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchApplications()
    }, [])

    return (
        <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
            <div className="w-full md:p-10 p-4">
                <h2 className="pb-4 text-lg font-medium">Job Applications</h2>
                <div className="flex flex-col items-center max-w-5xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
                    <table className="md:table-auto table-fixed w-full overflow-hidden text-left">
                        <thead className="text-gray-900 text-sm bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 font-semibold truncate">Name</th>
                                <th className="px-4 py-3 font-semibold truncate">Email</th>
                                <th className="px-4 py-3 font-semibold truncate">Role</th>
                                <th className="px-4 py-3 font-semibold truncate">Exp.</th>
                                <th className="px-4 py-3 font-semibold truncate">Resume/Bio</th>
                                <th className="px-4 py-3 font-semibold truncate">Date</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-500">
                            {applications.map((app, index) => (
                                <tr key={index} className="border-t border-gray-500/20 hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-3 font-medium text-gray-800">{app.name}</td>
                                    <td className="px-4 py-3 truncate">{app.email}</td>
                                    <td className="px-4 py-3"><span className='bg-primary/10 text-primary px-2 py-1 rounded text-xs'>{app.role}</span></td>
                                    <td className="px-4 py-3">{app.experience}</td>
                                    <td className="px-4 py-3 truncate max-w-[200px]">{app.resumeUrl}</td>
                                    <td className="px-4 py-3">{new Date(app.createdAt).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {applications.length === 0 && <p className='py-10 text-gray-400'>No applications found.</p>}
                </div>
            </div>
        </div>
    )
}

export default JobApplications
