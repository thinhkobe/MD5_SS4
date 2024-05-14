import React, { useState } from "react";

export default function FromAddStudent() {
  const [student, setStudent] = useState({
    studentId: "",
    studentName: "",
    studentAge: "",
    studentSex: "",
    studentDob: "",
    studentHometown: "",
    studentAdreess: "",
  });

  const handelSubmitForm = () => {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    localStorage.setItem("students", JSON.stringify([...students, student]));

    // Reset form after submit
    setStudent({
      studentId: "",
      studentName: "",
      studentAge: "",
      studentSex: "",
      studentDob: "",
      studentHometown: "",
      studentAdreess: "",
    });
  };

  const handelChangge = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      [name]: value,
    });
  };

  return (
    <>
      <div className="col-5 grid-margin">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Thông tin sinh viên</h3>
            <form className="form-sample">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input
                    name="studentId"
                    type="text"
                    className="form-control"
                    onChange={handelChangge}
                    value={student.studentId} // Bind value with state
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                <div className="col-sm-9">
                  <input
                    onChange={handelChangge}
                    type="text"
                    className="form-control"
                    name="studentName"
                    value={student.studentName} // Bind value with state
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tuổi</label>
                <div className="col-sm-9">
                  <input
                    onChange={handelChangge}
                    type="text"
                    className="form-control"
                    name="studentAge"
                    value={student.studentAge} // Bind value with state
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Giới tính</label>
                <div className="col-sm-9">
                  <select
                    className="form-control"
                    name="studentSex"
                    onChange={handelChangge}
                    value={student.studentSex} // Bind value with state
                  >
                    <option value={"nam"}>Nam</option>
                    <option value={"nữ"}>Nữ</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                <div className="col-sm-9">
                  <input
                    onChange={handelChangge}
                    className="form-control"
                    placeholder="dd/mm/yyyy"
                    name="studentDob"
                    value={student.studentDob} // Bind value with state
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                <div className="col-sm-9">
                  <select
                    onChange={handelChangge}
                    className="form-control"
                    name="studentHometown"
                    value={student.studentHometown} // Bind value with state
                  >
                    <option value={"Hà Nội"}>Hà Nội</option>
                    <option value={"TP. Hồ Chí Minh"}>TP. Hồ Chí Minh</option>
                    <option value={"Đà Nẵng"}>Đà Nẵng</option>
                    <option value={"Quảng Ninh"}>Quảng Ninh</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                <div className="col-sm-9">
                  <textarea
                    onChange={handelChangge}
                    className="form-control"
                    defaultValue={""}
                    name="studentAdrress"
                    value={student.studentAdrress} // Bind value with state
                  />
                </div>
              </div>
              <button
                onClick={handelSubmitForm}
                type="button"
                className="btn btn-primary me-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
