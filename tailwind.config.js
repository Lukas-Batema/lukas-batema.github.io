module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      iPhone: {
        min: "0px",
        max: "428px",
      },
      Andriod: {
        min: "0px",
        max: "360px",
      },
      iPad: {
        min: "0px",
        max: "1024px",
      },
      Surface: {
        min: "0px",
        max: "1440px",
      },
      MacBook: {
        min: "0px",
        max: "1728px",
      },
      iMac: {
        min: "0px",
        max: "1280px",
      },
      Other: {
        min: "0px",
        max: "1440px",
      },
    },
    extend: {
      spacing: {
        px: "1px",
        0: "0px",
        0.5: "0.5px",
        1: "1px",
        1.5: "1.5px",
        2: "2px",
        2.5: "2.5px",
        3: "3px",
        3.5: "3.5px",
        4: "4px",
        4.5: "4.5px",
        5: "5px",
        5.5: "5.5px",
        6: "6px",
        6.5: "6.5px",
        7: "7px",
        7.5: "7.5px",
        8: "8px",
        8.5: "8.5px",
        9: "9px",
        9.5: "9.5px",
        10: "10px",
        11: "11px",
        12: "12px",
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        19: "19px",
        20: "20px",
        21: "21px",
        22: "22px",
        23: "23px",
        24: "24px",
        25: "25px",
        30: "30px",
        35: "35px",
        40: "40px",
        45: "45px",
        50: "50px",
        60: "60px",
        70: "70px",
        80: "80px",
        90: "90px",
        100: "100px",
        125: "125px",
        150: "150px",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
      },
      borderRadius: {
        sm: "2.5px",
        md: "5px",
        lg: "10px",
        "2xl": "15px",
        "3xl": "20px",
        "4xl": "25px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typograpgy"),
    require("@tailindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
