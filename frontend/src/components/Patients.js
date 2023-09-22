import React, { useState, useEffect } from "react";
import patient from "../assets/patient.png";
import {
  AiOutlineSearch,
  AiFillPrinter,
  AiOutlinePlus,
  AiFillEdit,
  AiFillFileText,
} from "react-icons/ai";
import Avatar from "@mui/material/Avatar";
import { useFormik } from "formik";
import * as Yup from "yup";

import { CiViewList, CiViewTable, CiCircleMore } from "react-icons/ci";
import { MdOutlineClear } from "react-icons/md";
import { TextField } from "@mui/material";
import { DateField } from "@mui/x-date-pickers/DateField";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { Modal } from "react-responsive-modal";
import { BsFillTrashFill, BsFillCameraFill } from "react-icons/bs";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ReactPhoneInput from "react-phone-input-material-ui";

function Patients() {
  const [openSearch, setOpenSearch] = useState(0);
  const [viewMode, setViewMode] = useState(0);
  const [search, setSearch] = useState("");
  const [filtredDtata, setFiltredData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [assurance, setAssurance] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [groupSanguin, setGroupSanguin] = useState("");
  const [tel, setTel] = useState("");
  const [sexe, setSexe] = useState("");
  const [value, setValue] = useState("");
  const formik = useFormik({
    // Form validation
    initialValues: {
      Nom: "",
      Prenom: "",
      Email: "",
      Adress: "",
      DateDeNaissance: "",
      Tel: "",
      Assurance: "",
      GroupSanguin: "",
      Sexe: "",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validationSchema: Yup.object({
      Nom: Yup.string().required("Required"),
      Prenom: Yup.string().required("Required"),
      Adress: Yup.string().required("Required"),
      DateDeNaissance: Yup.string().required("Required"),
      Tel: Yup.string().required("Required"),
      Assurance: Yup.string().required("Required"),
      GroupSanguin: Yup.string().required("Required"),
      Sexe: Yup.string().required("Required"),

      Email: Yup.string().email("Invalid email address").required("Required"),
    }),
  });
  console.log("dd", formik.values);
  console.log("group", groupSanguin);

  const handleSubmit = (e) => {};
  const data = [
    {
      num: 1,
      nom: "Nevile",
      prenom: "Maypole",
      "date de naissance": "5/6/2023",
      telephone: "757-870-9506",
      sexe: "Male",
      wilaya: "China",
    },
    {
      num: 2,
      nom: "Burnaby",
      prenom: "McClenaghan",
      "date de naissance": "2/13/2023",
      telephone: "425-889-4317",
      sexe: "Male",
      wilaya: "Zambia",
    },
    {
      num: 3,
      nom: "Wallas",
      prenom: "Mervyn",
      "date de naissance": "1/27/2023",
      telephone: "846-142-9383",
      sexe: "Male",
      wilaya: "China",
    },
    {
      num: 4,
      nom: "Michelina",
      prenom: "Zamora",
      "date de naissance": "10/26/2022",
      telephone: "998-599-9328",
      sexe: "Female",
      wilaya: "China",
    },
    {
      num: 5,
      nom: "Yetta",
      prenom: "Macci",
      "date de naissance": "1/9/2023",
      telephone: "201-504-2766",
      sexe: "Female",
      wilaya: "Portugal",
    },
    {
      num: 6,
      nom: "Megen",
      prenom: "Couldwell",
      "date de naissance": "5/3/2023",
      telephone: "900-899-0944",
      sexe: "Female",
      wilaya: "Indonesia",
    },
    {
      num: 7,
      nom: "Vinny",
      prenom: "Sapsford",
      "date de naissance": "8/10/2023",
      telephone: "204-689-7249",
      sexe: "Female",
      wilaya: "Philippines",
    },
    {
      num: 8,
      nom: "Kerianne",
      prenom: "Lesaunier",
      "date de naissance": "7/15/2023",
      telephone: "304-690-7068",
      sexe: "Female",
      wilaya: "France",
    },
    {
      num: 9,
      nom: "Phyllida",
      prenom: "Jessen",
      "date de naissance": "5/11/2023",
      telephone: "248-886-4670",
      sexe: "Female",
      wilaya: "Finland",
    },
    {
      num: 10,
      nom: "Joly",
      prenom: "Paskin",
      "date de naissance": "4/9/2023",
      telephone: "266-592-2431",
      sexe: "Female",
      wilaya: "Mali",
    },
    {
      num: 11,
      nom: "Eloisa",
      prenom: "Thring",
      "date de naissance": "1/12/2023",
      telephone: "288-901-4976",
      sexe: "Female",
      wilaya: "Syria",
    },
    {
      num: 12,
      nom: "Cherye",
      prenom: "Champain",
      "date de naissance": "7/24/2023",
      telephone: "984-847-9161",
      sexe: "Agender",
      wilaya: "China",
    },
    {
      num: 13,
      nom: "Robin",
      prenom: "Sapsford",
      "date de naissance": "9/24/2022",
      telephone: "615-812-4736",
      sexe: "Male",
      wilaya: "Zimbabwe",
    },
    {
      num: 14,
      nom: "Fancy",
      prenom: "Floch",
      "date de naissance": "12/3/2022",
      telephone: "403-291-6785",
      sexe: "Female",
      wilaya: "China",
    },
    {
      num: 15,
      nom: "Johnathon",
      prenom: "Gapper",
      "date de naissance": "1/7/2023",
      telephone: "573-247-8889",
      sexe: "Male",
      wilaya: "China",
    },
    {
      num: 16,
      nom: "Byrann",
      prenom: "Maylin",
      "date de naissance": "1/20/2023",
      telephone: "587-597-8872",
      sexe: "Male",
      wilaya: "Sri Lanka",
    },
    {
      num: 17,
      nom: "Dana",
      prenom: "Descroix",
      "date de naissance": "5/29/2023",
      telephone: "461-509-2853",
      sexe: "Male",
      wilaya: "Russia",
    },
    {
      num: 18,
      nom: "Helenka",
      prenom: "Manneville",
      "date de naissance": "9/7/2022",
      telephone: "309-831-7744",
      sexe: "Female",
      wilaya: "Portugal",
    },
    {
      num: 19,
      nom: "Farrand",
      prenom: "Lorant",
      "date de naissance": "12/25/2022",
      telephone: "780-287-6766",
      sexe: "Female",
      wilaya: "Iran",
    },
    {
      num: 20,
      nom: "Farlay",
      prenom: "Roach",
      "date de naissance": "12/16/2022",
      telephone: "775-734-2278",
      sexe: "Male",
      wilaya: "Macedonia",
    },
    {
      num: 21,
      nom: "Hewie",
      prenom: "Bugs",
      "date de naissance": "5/20/2023",
      telephone: "629-734-9346",
      sexe: "Male",
      wilaya: "Tajikistan",
    },
    {
      num: 22,
      nom: "Elisa",
      prenom: "Statersfield",
      "date de naissance": "7/26/2023",
      telephone: "945-949-0273",
      sexe: "Female",
      wilaya: "Indonesia",
    },
    {
      num: 23,
      nom: "Katerine",
      prenom: "Ivanets",
      "date de naissance": "10/11/2022",
      telephone: "993-165-8019",
      sexe: "Female",
      wilaya: "Chile",
    },
    {
      num: 24,
      nom: "Guido",
      prenom: "Gabits",
      "date de naissance": "8/25/2023",
      telephone: "501-586-9839",
      sexe: "Male",
      wilaya: "Indonesia",
    },
    {
      num: 25,
      nom: "Sylvester",
      prenom: "Litzmann",
      "date de naissance": "12/9/2022",
      telephone: "544-231-0875",
      sexe: "Male",
      wilaya: "Russia",
    },
    {
      num: 26,
      nom: "Ema",
      prenom: "Kondratenko",
      "date de naissance": "6/6/2023",
      telephone: "452-118-3599",
      sexe: "Female",
      wilaya: "Belarus",
    },
  ];
  useEffect(() => {
    if (search == "") {
      setFiltredData(data);
    }
    if (openSearch == 0 && search != "") {
      setFiltredData(data.filter((elem) => elem.num == search));
    }
    if (openSearch == 1 && search != "") {
      setFiltredData(
        data.filter(
          (elem) =>
            elem.nom.toLowerCase().includes(search.toLowerCase()) ||
            elem.prenom.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
    // if (openSearch == 2 && search != "") {
    //   setFiltredData(data.filter((elem) => elem?.age == search));
    // }
    if (openSearch == 3 && search != "") {
      setFiltredData(data.filter((elem) => elem.sexe == search));
    }
  }, [search, openSearch]);
  const content = filtredDtata.map((elem) => (
    <div
      key={elem.num}
      className="w-full    mx-12 flex items-center text-sm font-meduim text-gray-600 py-2 border-b border-black justify-center "
    >
      <div className="w-[12vw] flex justify-start space-x-2 items-center text-xl pr-2  ">
        {" "}
        <CiCircleMore className="text-green-600 cursor-pointer" />
        <AiFillEdit className="text-blue-600 cursor-pointer" />
        <AiFillFileText className="text-red-600 cursor-pointer " />
        <AiFillPrinter className="text-purple-700 cursor-pointer" />
      </div>
      <div className="w-[10vw]">{elem.num}</div>
      <div className="w-[10vw]"> {elem.nom}</div>
      <div className="w-[10vw]">{elem.prenom}</div>
      <div className="w-[7vw]">{elem.sexe}</div>
      <div className="w-[10vw]">25</div>
      <div className="w-[12vw]">{elem.telephone}</div>
      <div className="w-[13vw]">{elem.wilaya}</div>
    </div>
  ));
  return (
    <div className=" pl-[300px] bg-gray-200 overflow-x-hidden h-screen">
      <div className=" w-full flex justify-between items-end px-12">
        <div>
          <div className="flex justify-start items-center pb-4">
            <img src={patient} className="w-[70px] h-[70px]" />
            <h1 className="text-2xl text-indigo-600 pl-2 font-medium">
              Table patients
            </h1>
          </div>
          <div className="flex bg-white py-1 px-1 justify-start items-center">
            <button
              onClick={() => setOpenSearch(0)}
              className={`${
                openSearch == 0
                  ? "border-b-2 border-blue-700 text-blue-700 "
                  : ""
              } px-2 py-1 bg-white flex items-center text-sm font-medium`}
            >
              {" "}
              <AiOutlineSearch className="text-blue-300 text-lg" />{" "}
              <span className="pl-1">Num Dossier</span>
            </button>
            <button
              onClick={() => setOpenSearch(1)}
              className={`${
                openSearch == 1
                  ? "border-b-2 border-blue-700 text-blue-700 "
                  : ""
              } px-2 py-1 bg-white flex items-center text-sm font-medium`}
            >
              <AiOutlineSearch className="text-blue-300 text-lg" /> Nom Prénom
            </button>
            <button
              onClick={() => setOpenSearch(2)}
              className={`${
                openSearch == 2
                  ? "border-b-2 border-blue-700 text-blue-700 "
                  : ""
              } px-2 py-1 bg-white flex items-center text-sm font-medium`}
            >
              <AiOutlineSearch className="text-blue-300 text-lg" />
              Age
            </button>
            <button
              onClick={() => setOpenSearch(3)}
              className={`${
                openSearch == 3
                  ? "border-b-2 border-blue-700 text-blue-700 "
                  : ""
              } px-2 py-1 bg-white flex items-center text-sm font-medium`}
            >
              <AiOutlineSearch className="text-blue-300 text-lg" />
              Sexe
            </button>
          </div>
        </div>
        <div className="">
          <div className="flex justify-end space-x-3 text-4xl text-blue-600">
            <CiViewList
              className="cursor-pointer"
              onClick={() => setViewMode(0)}
            />
            <CiViewTable
              className="cursor-pointer"
              onClick={() => setViewMode(1)}
            />
          </div>
          <div className="flex items-center pt-3 pb-1  space-x-3">
            <button
              onClick={() => setOpenModal(true)}
              className="flex items-center text-white justify-around px-4 py-1 bg-green-700"
            >
              {" "}
              <AiOutlinePlus className="text-2xl text-white" />{" "}
              <span className="pl-2">Nouveau</span>
            </button>
            <button className="flex items-center text-white justify-around px-4 py-1 bg-blue-700">
              {" "}
              <AiFillPrinter className="text-2xl text-white" />{" "}
              <span className="pl-2">Imprimer</span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-[40vw] bg-white mx-12 mt-2  py-2 flex justify-between items-center">
        <p className="text-gray-700 text-sm  font-medium w-[150px] ">
          Par{" "}
          {openSearch == 0
            ? "Num de dossier :"
            : openSearch == 1
            ? "Nom Prenom : "
            : openSearch == 2
            ? "Age :"
            : openSearch == 3 && "sexe :"}
        </p>

        {openSearch == 3 ? (
          <FormControl size="small" sx={{ width: 200 }}>
            <InputLabel id="demo-simple-select-label">Sexe</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={search}
              label="Age"
              onChange={(e) => setSearch(e.target.value)}
            >
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Male"}>Male</MenuItem>
            </Select>
          </FormControl>
        ) : (
          <TextField
            id="filled-basic"
            size="small"
            label={`${
              openSearch == 0
                ? "Num de dossier "
                : openSearch == 1
                ? "Nom Prenom  "
                : openSearch == 2
                ? "Age "
                : openSearch == 3 && "sexe "
            }`}
            type={`${
              openSearch == 0
                ? "number"
                : openSearch == 1
                ? "text  "
                : openSearch == 2 && "number"
            }`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        )}

        <MdOutlineClear
          className="text-2xl cursor-pointer hover:text-red-700 text-red-500"
          onClick={() => setSearch("")}
        />
      </div>
      <div className="w-full flex justify-center mx-12 mt-2 py-2 border-b-[2px] border-blue-500 bg-white text-sm font-medium items-center ">
        <div className="w-[12vw]"> Actions</div>
        <div className="w-[10vw]">Num</div>
        <div className="w-[10vw]"> Nom</div>
        <div className="w-[10vw]">Prénom</div>
        <div className="w-[7vw]">Sexe</div>
        <div className="w-[10vw]">Age</div>
        <div className="w-[12vw]">Téléphone</div>
        <div className="w-[13vw]">wilaya</div>
      </div>
      <div className=" h-[55vh] overflow-y-scroll overflow-x-hidden">
        {content}
      </div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        center
        animationDuration={400}
        styles={{
          overlay: { opacity: 10 },
          modal: { borderRadius: 10 },
        }}
      >
        <div className="">
          <div className="flex flex-col pr-6 items-center justify-center ">
            <div className="flex  items-center justify-center">
              <div className="  relative group ">
                <Avatar
                  // src={userRed.photoURL ? userRed.photoURL : ""}
                  src={""}
                  className="transition-opacity hover:opacity-40"
                  sx={{ width: 120, height: 120 }}
                />
                <div className=" opacity-0 group-hover:opacity-100 absolute top-[46px] left-[46px] text-center">
                  <div>
                    <label htmlFor="photo">
                      <BsFillCameraFill />
                    </label>
                    {imageUpload ? (
                      <BsFillTrashFill
                        className="text-red-500"
                        // onClick={deleteimg}
                      />
                    ) : null}
                    <input
                      type="image"
                      style={{ display: "none" }}
                      onChange={(e) => setImageUpload(e.target.files[0])}
                      id="photo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-3  items-center justify-center pt-5"
        >
          <div className="flex h-[80px]  space-x-3">
            <TextField
              error={formik.errors.Nom && formik.touched.Nom}
              id="outlined-error"
              label="Nom"
              {...formik.getFieldProps("Nom")}
              helperText={formik.errors.Nom}
            />
            <TextField
              error={formik.errors.Prenom && formik.touched.Prenom}
              id="outlined-error"
              label="Prénom"
              {...formik.getFieldProps("Prenom")}
              helperText={formik.errors.Prenom}
            />
          </div>
          <div className="flex h-[80px]  items-center space-x-3">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateField"]}>
                <DateField
                  label="Date De Naissance"
                  {...formik.getFieldProps("DateDeNaissance")}
                  value={dateNaissance}
                  helperText={"Required"}
                  onChange={(newValue) => {
                    setDateNaissance(newValue);

                    formik.setValues({
                      ...formik.values,
                      DateDeNaissance: newValue,
                    });
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>

            <TextField
              error={formik.errors.Adress && formik.touched.Adress}
              id="outlined-error"
              label="Adress"
              {...formik.getFieldProps("Adress")}
              helperText={formik.errors.Adress}
            />
          </div>
          <div className="flex h-[80px] space-x-3">
            <TextField
              error={formik.errors.Tel && formik.touched.Tel}
              id="outlined-error"
              label="Téléphone"
              type="number"
              {...formik.getFieldProps("Tel")}
              helperText={formik.errors.Tel}
            />
            <TextField
              error={formik.errors.Email && formik.touched.Email}
              id="outlined-error"
              label="E-mail"
              {...formik.getFieldProps("Email")}
              helperText={formik.errors.Email}
            />
          </div>
          <div className="flex items-center space-x-3">
            <FormControl size="small" sx={{ width: 150 }}>
              <InputLabel id="demo-simple-select-label">Sexe</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                {...formik.getFieldProps("Sexe")}
                value={sexe}
                label="Sexe"
                onChange={(e) => {
                  setSexe(e.target.value);
                  formik.setValues({
                    ...formik.values,
                    Sexe: e.target.value,
                  });
                }}
              >
                <MenuItem value={"Female"}>Female</MenuItem>
                <MenuItem value={"Male"}>Male</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ width: 150 }}>
              <InputLabel id="demo-simple-select-label">
                Group Sanguin
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={groupSanguin}
                label="group sanguin"
                onChange={(e) => {
                  setGroupSanguin(e.target.value);
                  formik.setValues({
                    ...formik.values,
                    GroupSanguin: e.target.value,
                  });
                }}
              >
                <MenuItem value={"O+"}>O+</MenuItem>
                <MenuItem value={"O-"}>O-</MenuItem>
                <MenuItem value={"A+"}>A+</MenuItem>
                <MenuItem value={"A-"}>A-</MenuItem>
                <MenuItem value={"B+"}>B+</MenuItem>
                <MenuItem value={"B-"}>B-</MenuItem>
                <MenuItem value={"AB+"}>AB+</MenuItem>
                <MenuItem value={"AB-"}>AB-</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ width: 150 }}>
              <InputLabel id="demo-simple-select-label">Assurance</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                {...formik.getFieldProps("Assurance")}
                value={assurance}
                label="Assurance"
                onChange={(e) => {
                  setAssurance(e.target.value);
                  formik.setValues({
                    ...formik.values,
                    Assurance: e.target.value,
                  });
                }}
              >
                <MenuItem value={"Oui"}>Oui</MenuItem>
                <MenuItem value={"Non"}>Non</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div></div>
        </form>
      </Modal>
    </div>
  );
}

export default Patients;
