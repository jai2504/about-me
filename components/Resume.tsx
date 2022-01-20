import CloudPdfViewer from "@openbook/cloudpdf-viewer";
import { useEffect, useRef } from "react";
const Resume = () => {
  const viewer = useRef(null);
  useEffect(() => {
    CloudPdfViewer(
      {
        documentId: "76cba344-2f5e-40e9-ad97-6b33e3ad475c",
        themeColor:"#00f260",
        appBarColored:true
      },
      viewer.current
    ).then((instance) => {});
  }, []);
  return (
    <div className="my-3 dark:bg-dark-100">
      <div className="viewer " ref={viewer} style={{"height":"100vh"}}></div>
    </div>
  );
};

export default Resume;
