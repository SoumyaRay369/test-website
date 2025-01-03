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
                
                <button onClick={() => setSelectedField('sde')} className='bg-blue-500 hover:bg-blue-600 font-garamond rounded-xl p-3 text-white font-medium'>Software Engineering</button>
                <button onClick={() => setSelectedField('analytics')} className='bg-blue-500 hover:bg-blue-600 font-garamond rounded-xl p-2 text-white font-medium'>Data Science & ML</button>

            </div>
            {renderField()}


        </>
    )
} 