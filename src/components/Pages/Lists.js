import React, { useEffect } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../actions.js";
import UserDetails from "./UserDetails.js";

const UserList = () => {
  const users = useSelector((state) => state.selectUserReducer);
  const selected = useSelector((state) => state.selectUserReducer.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.fetchUsers());
  }, []);

  const handleChange = (e) => {
    const selectedUser = dispatch(allActions.selectUser(e)).payload;

    console.log("list selected ", selectedUser);
  };

  const renderList = () => {
    return users?.items?.map((user) => {
      return {
        id: user.id,
        label: user.name,
        value: user.name,
        email: user.email,
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode,
        phone: user.phone,
        website: user.website,
        company: user.company,
      };
    });
  };

  return (
    <div>
      <br />
      <Select
        options={renderList()}
        onChange={(e) => handleChange(e)}
        value={selected}
        isMulti
        hideSelectedOptions={true}
        controlShouldRenderValue={true}
      />
      <br />
      <div className="ui small buttons">
        <button
          onClick={() => dispatch(allActions.sort_acs(selected))}
          className="ui button"
        >
          Ascending Sort
        </button>
        <div className="or"></div>
        <button
          onClick={() => dispatch(allActions.sort_desc(selected))}
          className="ui button"
        >
          Descending Sort
        </button>
      </div>
      <br />
      <UserDetails />
      <br />
    </div>
  );
};

export default UserList;
