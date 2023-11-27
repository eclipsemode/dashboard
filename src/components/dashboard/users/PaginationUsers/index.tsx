import React from 'react';
import Pagination from "@ui/Pagination";

const PaginationUsers = () => {
    return (
        <Pagination previousButtonDisabled={true} nextButtonDisabled={false}
                    onPreviousClick={() => console.log('prev')}
                    onNextClick={() => console.log('next')}/>
    );
};

export default PaginationUsers;