import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";

const EditContact = ({ contacts, updateContact }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentUser = contacts.find(
    (contact) => contact.id === id
  );
  
  const [firstName, setFistName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  useEffect(() => {
    setFistName(currentUser.first_name);
    setLastName(currentUser.last_name);
    setEmail(currentUser.email);
    setPincode(currentUser.pincode);
    setCity(currentUser.city);
    setState(currentUser.states);
  }, [currentUser]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactPhoneExists = contacts.filter((contact) =>
      contact.pincode === pincode && contact.id !== currentUser.id
        ? contact
        : null
    );

    if ( !firstName || !lastName || !pincode || !state || !city ) {
      return toast.warning("Please fill in all fields!!");
    }

    const data = {
      id: currentUser.id,
      email:email,
      first_name:firstName,
      last_name:lastName,
      pincode:pincode,
      states:state,
      city:city
    };

    updateContact(data);
    toast.success("Contact updated successfully!!");
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => history.push("/")}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentUser ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={firstName}
                  placeholder={"First Name"}
                  onChange={(e) => setFistName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={lastName}
                  placeholder={"Last Name"}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={email}
                  disabled={true}
                  placeholder={"Email"}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={pincode}
                  placeholder={"Pincode"}
                  onChange={(e) => setPincode(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={state}
                  placeholder={"State"}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={city}
                  placeholder={"City"}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update Contact
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => history.push("/")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Contact Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateContact: (data) => {
    dispatch({ type: "UPDATE_USER", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
