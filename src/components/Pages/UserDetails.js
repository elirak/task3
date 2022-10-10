import React, { useEffect, useState } from "react";
import allActions from "../../actions.js";
import { useSelector, useDispatch } from "react-redux";
import DeleteUser from "./DeleteUser.js";

const UserDetails = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const users = useSelector((state) => state.selectUserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.selectUser());
  }, []);

  if (!users.selected?.length) {
    return <div className="ui header">Select a user</div>;
  }

  const renderList = () => {
    return users?.selected?.map((user) => {
      return (
        <div key={user.id}>
          <div>
            <div key={user.id} className="ui card" style={{ margin: "20px" }}>
              <div className="content">
                <i
                  className="x icon"
                  onClick={() => {
                    setOpen(true);
                    setSelectedItem(user.id);
                  }}
                ></i>
                <DeleteUser
                  open={open}
                  close={() => setOpen(false)}
                  userid={selectedItem}
                />

                <div className="header">{user.label}</div>
              </div>
              <div className="content">
                <div className="ui small feed">
                  <div className="event">
                    <div className="content">
                      <div className="summary">Email : {user.email}</div>
                    </div>
                  </div>
                  <div className="event">
                    <div className="content">
                      <div className="summary">
                        Address: {user.street} , {user.city}
                      </div>
                    </div>
                  </div>
                  <div className="event">
                    <div className="content">
                      <div className="summary">Phone: {user.phone}</div>
                    </div>
                  </div>
                  <div className="event">
                    <div className="content">
                      <div className="summary">
                        Company: {user.company.name}
                      </div>
                    </div>
                  </div>
                  <div className="event">
                    <div className="content">
                      <div className="summary">
                        <a
                          href={`http://${user.website}`}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          {user.website}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      {renderList()}
      <br />
    </div>
  );
};

export default UserDetails;
