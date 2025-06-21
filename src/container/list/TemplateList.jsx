import { useEditorStore } from "../../store/useEditorStore";
import AddIcon from "../../assets/plus.svg?react";
import DownloadIcon from "../../assets/download.svg?react";
import Breadcumb from "../../assets/breadcumb.svg?react";
import IconButton from "../../atoms/IconButton";
import Typography from "../../atoms/Typography";
import Cards from "../../components/list/Cards";
import { useNavigate } from "react-router-dom";
import Footer from  "../../components/Footer";
import TopBar from "../../components/TopBar";
import SideNav from "../../components/SideNav";

const TemplateList = () => {
  const navigate = useNavigate();

  const {
    editor: { templates },
  } = useEditorStore();

  return (
    <div
      className="flex gap-6 h-screen w-screen py-4 px-2 bg-[#F4F3F4]"
    >
      <div className="w-full">
        <TopBar onSearch={() => console.log('searching...')} />
        <div className="my-2.5 flex justify-end">
          <Breadcumb />
        </div>

        <div className="p-4 bg-white rounded-[10px]">
          <div className="flex justify-between items-center pb-4 border-b border-[#E5E7EB] w-full">
            <div className="flex items-center gap-2">
              <IconButton
                icon={<DownloadIcon />}
                type="secondary"
                onClick={() => {}}
              />
              <IconButton
                icon={<AddIcon />}
                onClick={() => navigate("/editor")}
              />
            </div>

            <Typography text="القوالب" size={16} weight={500} />
          </div>
          <div
            style={{ height: "calc(100vh - 340px)" }}
            className="overflow-y-auto mt-4"
          >
            {!templates.length ? (
              <Typography
                text="لا توجد بيانات"
                className="h-full w-full flex justify-center items-center"
              />
            ) : (
              <Cards />
            )}
          </div>
        </div>
        <Footer />
      </div>
      <SideNav />
    </div>
  );
};

export default TemplateList;
