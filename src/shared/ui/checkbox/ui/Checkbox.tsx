"use client";
import { useState } from "react";
import { Input } from "@/shared/ui";
import { CheckboxProps } from "./props";
import "./index.scss";
import classNames from "classnames";

const CheckBox = ({ label, classLabel }: CheckboxProps) => {
  const [checkedItems, setCheckedItems] = useState<boolean>(false);

  const handleCheckBoxChange = () => {
    setCheckedItems(!checkedItems);
  };

  return (
    <label className="gap-[23px] justify-center items-center checkbox-label cursor-pointer">
      <Input
        classField="h-6"
        onChange={handleCheckBoxChange}
        type="checkbox"
        checked={checkedItems}
        className={`checkbox-custom ${checkedItems ? "checkbox-input" : ""}`}
      />
      <span className={classNames(classLabel, "whitespace-nowrap")}>
        {label}
      </span>
    </label>
  );
};

export default CheckBox;
