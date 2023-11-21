import React from 'react';

interface IProps {
    nextButtonDisabled: boolean,
    previousButtonDisabled: boolean
    onPreviousClick: () => void,
    onNextClick: () => void
}

const Pagination = ({nextButtonDisabled, previousButtonDisabled, onPreviousClick, onNextClick}: IProps) => {
    return (
        <div className='flex flex-row justify-between'>
            <button className='bg-slate-50 text-dark-950 px-2.5 py-1.5 rounded-sm disabled:opacity-20'
                    onClick={onPreviousClick}
                    disabled={previousButtonDisabled}>Previous
            </button>
            <button className='bg-slate-50 text-dark-950 px-2.5 py-1.5 rounded-sm disabled:opacity-20'
                    onClick={onNextClick}
                    disabled={nextButtonDisabled}>Next
            </button>
        </div>
    );
};

export default Pagination;