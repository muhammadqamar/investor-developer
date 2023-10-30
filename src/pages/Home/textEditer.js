import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import "emoji-mart/css/emoji-mart.css";
import { Quill } from "react-quill";
import { emojiModule } from "quill-emoji";
import { Box } from "@radix-ui/themes";

// Quill.register("modules/emoji", emojiModule);

const TextEditer = ({ setStap }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value !== "") {
      setStap(3);
    }
  }, [setStap, value]);

  const handleSubmit = () => {
    alert("value");
    console.log(value);
  };

  const customSubmitButton = (
    <button className="ql-submit" onClick={handleSubmit}>
      Submit
    </button>
  );

  return (
    <Box className="w-full !px-[10px] !pt-[12px] !pb-[50px] rounded-lg !bg-white relative border border-solid border-[#EBEBEF] overflow-hidden">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={{
          toolbar: {
            container: [
              ["emoji", "bold", "italic", "underline"],
              // [customSubmitButton],

              ["submit"],
            ],
          },
        }}
      />
    </Box>
  );
};

export default TextEditer;
