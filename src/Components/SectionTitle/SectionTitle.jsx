/* eslint-disable react/prop-types */


const SectionTitle = ({subHeading,heading}) => {
    return (
        <div>
            <p className="text-[20px] font-[400] text-center italic font-inter text-yellow-500 ">{subHeading} </p>
            <h1 className="text-[40px] font-[600] p-[10px] border-y-[2px] font-inter text-center max-w-[400px] mx-auto mt-[30px] mb-[50px] uppercase text-black">{heading} </h1>
        </div>
    );
};

export default SectionTitle;