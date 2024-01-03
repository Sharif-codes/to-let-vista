import useToLetRequest from "../../../../hooks/useToLetRequest";
import ToLetRequestTable from "./ToLetRequestTable";


const ToLetRequest = () => {
    const [toLet,refetch]= useToLetRequest()
    console.log("all tolet",toLet);
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Host</th>
              <th>Host Email</th>
              <th>House No.</th>
              <th>Floor</th>
              <th>Category</th>
              <th>Type</th>
              <th>Rent</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toLet?.map((item, idx) => <ToLetRequestTable key={idx} refetch={refetch} toLet={item} index={idx}></ToLetRequestTable>)}
          </tbody>
        </table>
      </div>
    );
};

export default ToLetRequest;