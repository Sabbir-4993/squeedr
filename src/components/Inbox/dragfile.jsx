import React from "react";
import { useDropzone } from "react-dropzone";
import "./Newmessage.scss";
import { GrDocumentUpload } from "react-icons/gr";

function Basic(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size / 1000} kb
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone mdragfile" })}>
        <input {...getInputProps()} />

        <p>
          {" "}
          <GrDocumentUpload
            style={{
              fontSize: "32px",

              opacity: "0.4",
              marginRight: "10px",
            }}
          />{" "}
          <span>Drop a file in here</span>{" "}
        </p>
      </div>
      <aside style={{ padding: "15px 19px 0px 21px " }}>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}
export default Basic;
