import SelectTemplateCard from "../../components/common/Card";
import { CreateDaoLayout } from "../../components/layouts";
import { DaoTemplate } from "./data";

const SelectTemplate = () => {
  return (
    <CreateDaoLayout>
        <div
            className="py-12 px-8 rounded-xl w-full bg-white trans shadow-card"    
            >
            <div className="mb-8 text-center w-full">
              <h1 className="text-xll font-gilroyBold">Select a template</h1>
              <p className="w-1/2 mx-auto text-grey text-normal">This template allows you to create your organization with our pre-defined templates</p>
            </div>
            <div className="flex w-full flex-wrap justify-between">
              {DaoTemplate.map((temp) => (
                <SelectTemplateCard url={temp.url} icon={temp.icon} color={temp.color} desc={temp.desc} title={temp.title} key={temp.title} disable={temp.disable} />
              ))}
            </div>
        </div>
    </CreateDaoLayout>
  );
};

export default SelectTemplate;
