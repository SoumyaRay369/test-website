import { Analytics } from './Analytics'
import { SDE } from './SDE'
import { useState } from 'react';
export const FieldOfExpertise = () => {
    const [selectedField, setSelectedField] = useState('sde');

    const renderField = () => {
        if (selectedField === 'analytics') {
            return <Analytics />;
        } else if (selectedField === 'sde') {
            return <SDE />;
        }
    }

    return (
        <>
            <div className='mt-10 flex justify-center gap-x-5'>
                
                <button onClick={() => setSelectedField('sde')} className='bg-blue-400 hover:bg-blue-500 rounded-xl p-3 text-white'>Software Engineering</button>
                <button onClick={() => setSelectedField('analytics')} className='bg-blue-400 hover:bg-blue-500 rounded-xl p-2 text-white'>Data Analytics</button>

            </div>
            {renderField()}


        </>
    )
} 