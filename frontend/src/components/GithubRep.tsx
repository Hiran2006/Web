function GithubRep({ header, html_url }: { header: string; html_url: string }) {
  return (
    <div className="w-3/10 h-20 text-center flex items-center justify-center bg-gray-600  rounded-3xl m-5">
      <a href={html_url} target="_blank" className="text-white">
        {header}
      </a>
    </div>
  );
}

export default GithubRep;
