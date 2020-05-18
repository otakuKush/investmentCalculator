export const GetFundList = async (params) => {
    console.log("api call",params)
    try {
        const response = await fetch("http://portal.amfiindia.com/DownloadNAVHistoryReport_Po.aspx?mf=53&tp=1&"+params.frmdt+"&"+params.todt, {
            method: 'GET',
        });
        const fundList = await response.json();
        return fundList;
    }
    catch (error) {
        console.error(error);
    }
}