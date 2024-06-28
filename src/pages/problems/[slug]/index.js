import { useRouter } from "next/router";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Bookmark from "../../../images/companies/bookmark.png";
import Image from "next/image";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Box from "@mui/material/Box";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { arrayData } from "@/data/arrayData";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";

export default function ProblemName() {
  const router = useRouter();
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#ebe6ff",
      color: theme.palette.common.black,
      fontWeight: 600,
      fontSize: 15,
      //   fontFamily: "ui-sans-serif",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      border: 0,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      //   backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      //   border: 0,
    },
  }));

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedData = arrayData.slice(startIndex, endIndex);

  return (
    <>
      <Header />
      <div className="pt-28 text-gray-600 dark:text-gray-300" id="testimonials">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 ">
          <div className="flex flex-row ">
            <Image src={Bookmark} alt="logo" className="w-7 h-6 mt-1.5" />
            <p className="ml-2 text-2xl font-medium font-sans ">
              {router.query.slug &&
                router.query.slug.charAt(0).toUpperCase() +
                  router.query.slug.slice(1)}
            </p>
            <div></div>
          </div>
          <TableContainer
            component={Paper}
            className="lg:w-8/12 lg:mx-auto mt-14 border-0 flex justify-center item-center"
          >
            <Table sx={{ minWidth: 400 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>LeetCode Id</StyledTableCell>
                  <StyledTableCell align="left">Title</StyledTableCell>
                  <StyledTableCell align="left">Acceptance</StyledTableCell>
                  <StyledTableCell align="left">Difficulty</StyledTableCell>
                  <StyledTableCell align="left">Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedData.map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {row.questionId}
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      className="hover:text-violet-700 cursor-pointer"
                      onClick={() =>
                        window.open(
                          `https://leetcode.com/problems/${row.titleSlug}/`,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      {row.title}
                    </StyledTableCell>
                    <StyledTableCell align="">{row.acRate}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.difficulty === "Easy" ? (
                        <div className="pl-3 pr-3 font-semibold	 pt-1 pb-1 w-fit bg-green-100 text-green-500 text-xs rounded-2xl">
                          Easy
                        </div>
                      ) : row.difficulty === "Hard" ? (
                        <div className="pl-3 pr-3 font-semibold pt-1 pb-1 w-fit bg-red-100 text-red-500 text-xs rounded-2xl">
                          Hard
                        </div>
                      ) : (
                        <div className="pl-3 pr-3  font-semibold pt-1 pb-1 w-fit bg-yellow-100 text-yellow-500 text-xs rounded-2xl">
                          Medium
                        </div>
                      )}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <input type="checkbox" className=""/>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
          className="lg:w-8/12 lg:mx-auto"
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={arrayData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
