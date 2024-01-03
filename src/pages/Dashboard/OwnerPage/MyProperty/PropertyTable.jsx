

const PropertyTable = ({ property,idx }) => {
   
    return (
        <tr>
            <th>{idx}</th>
            <td>{property.house}</td>
            <td>{property.floor}</td>
            <td>{property.category}</td>
            <td>{property.type}</td>
            <td>{property.rent}Tk.</td>
            <td>{property.service}Tk.</td>
            <td>{property.status}</td>
            <td><button className="btn btn-primary">Update</button> <button className="btn btn-secondary">Delete</button></td>
        </tr>

    );
};

export default PropertyTable;