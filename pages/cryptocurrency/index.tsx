import React from 'react'
import Table from '../../components/Table'
import majorIndexes from '../../data/major';
interface indexProps {

}

const index: React.FC<indexProps> = ({}) => {
        return (
            <div>
                <Table title='Cryptocurrency' tableItems={majorIndexes} />
            </div>
        );
}


export default index