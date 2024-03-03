const ServicePageCard = () => {
  return <>
    <div className="sm:hidden">For Extra Small</div>
    <div className="hidden sm:block md:hidden">Small</div>
    <div className="hidden md:block lg:hidden">Medium</div>
    <div className="hidden lg:block xl:hidden">Large</div>
    <div className="hidden xl:block">Extra Large</div>
  </>;
};

export default ServicePageCard;
