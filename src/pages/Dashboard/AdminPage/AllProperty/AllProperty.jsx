
import AllpropertyTable from "./AllpropertyTable";
import useAllProperty from "../../../../hooks/useAllProperty";


const AllProperty = () => {
   const [allProperties,refetch]= useAllProperty()
   console.log(allProperties);
    return (
        <div className="overflow-x-auto">
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>city</th>
                        <th>House</th>
                        <th>Floor</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Rent</th>
                        <th>Service Charge</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allProperties?.map((item,idx)=><AllpropertyTable key={idx} property={item} index={idx} refetch={refetch}></AllpropertyTable>)}
                    </tbody>

            </table>
        </div>

    );
};

export default AllProperty;