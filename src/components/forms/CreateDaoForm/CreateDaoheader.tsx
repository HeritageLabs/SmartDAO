interface IHeader {
    header: string;
    hasStage: boolean;
    currentStage: string;
    optional: string;
};

const defaultIHeader: IHeader = {
    header: '',
    hasStage: false,
    currentStage: '',
    optional: '',
}

const CreateDaoHeader = ({ header, hasStage, currentStage, optional }: IHeader) => (
    <div className="flex items-center justify-between my-8">
    <h1 className="font-gilroyBold text-gl">{header} <span className="text-grey">{optional}</span></h1>
    {hasStage && (
        <h1 className="font-gilroyMd text-lg">
        {currentStage}/<span className="text-grey">5</span>
        </h1>
    )}
  </div>
);

CreateDaoHeader.defaultProps = defaultIHeader;

export default CreateDaoHeader;