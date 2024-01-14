const SingleBlog = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="min-h-screen bg-mydark flex  items-center flex-col overflow-x-hidden max-w-[1324px] px-10 2xl:px-0 mx-auto">
     <p className="text-white mt-36"> Hi {params.slug}</p>
    </div>
  );
};

export default SingleBlog;
