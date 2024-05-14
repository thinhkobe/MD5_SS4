import React from "react";
import StudentList from "./StudentList";
import FromAddStudent from "./FromAddStudent";

export default function Manager_Student() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            {/* START CONTROL */}
            <div className="card-header">
              <div className="row">
                <div className="col-3">
                  <button
                    type="button"
                    className="btn btn-primary btn-icon-text"
                  >
                    Thêm mới sinh viên
                  </button>
                </div>
                <div className="col-6">
                  <form className="search-form" action="#">
                    <i className="icon-search" />
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search Here"
                      title="Search here"
                    />
                    <button className="btn btn-primary btn-icon-text">
                      Tìm kiếm
                    </button>
                  </form>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <select className="form-control">
                    <option value="">Sắp xếp</option>
                    <option value="">ABC def</option>
                    <option value="">ABC def</option>
                    <option value="">ABC def</option>
                  </select>
                </div>
              </div>
            </div>
            {/* END CONTROL */}
            {/* START LIST STUDENT */}
            <StudentList />
            {/* END LIST STUDENT */}
          </div>
        </div>
        {/* START FORM SINH VIEN */}
        <FromAddStudent />
        {/* END FORM SINH VIÊN */}
      </div>
    </div>
  );
}
