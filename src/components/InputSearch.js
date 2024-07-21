'use client'

import { useEffect, useRef, useState } from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

export default function InputSearch({ value }) {
  const [onFocus, setOnFocus] = useState(false);
  const buttonRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    const inputWidth = inputRef.current.clientWidth;
    const buttonWidth = buttonRef.current.clientWidth;

    if (!onFocus) {
      inputRef.current.style.paddingLeft = `${buttonWidth + 16}px`
      buttonRef.current.style.transform = ``;

    } else {
      inputRef.current.style.paddingLeft = `24px`
      buttonRef.current.style.transform = `translateX(${inputWidth - 24 - buttonWidth}px)`;
    }
  }, [onFocus])

  function handleOnClickButton() {
    setTimeout(() => inputRef.current.focus(), 100);
    setOnFocus(prevState => !prevState);
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={handleOnClickButton}
        className={[
          "absolute px-3 py-3 rounded-full transition-all bg-secondary-500 border-2 border-secondary-500",
        ]}
      >
        <HiMiniMagnifyingGlass className="w-6 h-6 text-secondary-50"/>
      </button>
      <input
        ref={inputRef}
        onClick={() => setOnFocus(prevState => !prevState)}
        onBlur={() => setOnFocus(prevState => !prevState)}
        type="text"
        placeholder="Search"
        className={[
          `py-3 pr-6 rounded-full border-2 border-neutral-100  placeholder-neutral-200
          focus:placeholder-secondary-200 transition-all duration-300 outline-none focus:border-secondary-500
          focus:transition-all focus:duration-300 pl-16`
        ]}
        value={value}
      />
    </div>
    // <input
    //   type="text"
    //   placeholder="Search"
    //   className={
    //     `py-3 px-6 rounded-full border-2 border-neutral-100  placeholder-neutral-200
    //     focus:placeholder-secondary-200 transition-all duration-300 outline-none focus:border-secondary-500
    //     focus:transition-all focus:duration-300
    //     `
    //   }
    //   value={value}
    // />
  )
}
