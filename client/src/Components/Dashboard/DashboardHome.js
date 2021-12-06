import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';
import { styled } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState,useEffect } from "react";
import { useAlert } from "react-alert";
import {useDispatch,useSelector} from "react-redux"
import Select from 'react-select'
import { requestLoan,getLoanHistory,clearError  } from '../../actions/userActions'
import orange from "../../assets/orange.svg"
import {loan_image_container,main_container,loanHistory_container,main_container_centered,form_container,paragraph,loan_buttons,input_style,table_container} from "../../stylesheets/applyLoan.module.css"
import {
    dash_container,
    heading,
    body,
    apply,
    cta,
    recent,
    grid_item
  } from "../../stylesheets/dashboard.module.css";
  import ClickButton from "../Button";
 

/* eslint-disable react/prop-types */
const DashboardHome = ({fullName}) => {

    const [open, setOpen] = useState(false);
    const [showModalContent, setShowModalContent] = useState("first")
    const [updatedInfo, setUpdatedInfo] = useState({
        firstName: "",
        lastName: "",
        amount: "3500",
        accountNumber: "",
        bankName: "",
        bvn: ""
    });

    const dispatch = useDispatch()
    const alert = useAlert();

    const {error,loanHistory} = useSelector(state=>state.userReducer)

    const {firstName,lastName,amount,accountNumber,bankName,bvn} = updatedInfo

    useEffect(() => {
        dispatch(getLoanHistory())
        if (error) {
            alert.error(error);
            dispatch(clearError());
        }
     }, [dispatch,error,alert])

    const handleSelectChange = (option) => {
        setUpdatedInfo(prev=>({...prev,bankName:option.value}));
    };


    const handleChange = (e) => {
        const {name,value} = e.target
        setUpdatedInfo(prev=>({...prev,[name]:value}))
    }

      
    const handleOpen = () => {
        setOpen(true)
        setShowModalContent("first")
    };

    const handleClose = () => {
        setOpen(false)
        setUpdatedInfo(prev=>({...prev,
        firstName: "",
        lastName: "",
        amount: "3500",
        accountNumber: "",
        bankName: "",
        bvn: ""}));
    };

    const matches = useMediaQuery('(min-width:600px)');

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: `${matches ? "70%" : "95%"}`,
        bgcolor: 'background.paper',
        borderRadius: "10px",
        boxShadow: 24,
        paddingTop: "10px"
      };

      const options = [
        { value: 'sterling', label: 'Sterling Bank' },
        { value: 'diamond', label: 'Diamond Bank' },
        { value: 'firstbank', label: 'First Bank' }
      ]

    const DrawerHeader = styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
      }));

    const loanDetails = [
        { label: "Amount Taken", price: "₦00,000" },
        { label: "Interest Accrued", price: "₦00,000" },
        { label: "Total Refund Due", price: "₦00,000" },
        { label: "Repayment Date", price: "₦00,000" },
      ];
    return (
        <>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Container>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        
                        {showModalContent==="first"&&<div className="apply-for-loan">
                            <h5 className={paragraph} style={{textAlign:"center", margin:"20px"}}>
                                Apply for Loan
                            </h5>
                            <Divider/>
                            <div className={main_container}>
                                <p className={paragraph}>Hello, {fullName} !</p>
                                <p className={paragraph}>You qualify for a maximum of ₦10,000 at this time.</p><br/>
                                <p className={paragraph}>Select Loan Amount</p><br/>
                                <div className={loan_buttons} style={{display:"flex",width:"100%",justifyContent:"space-between"}}>
                                    <ClickButton variant={`${amount==="3500"?"clicked" : "unclicked"}`} click={()=>setUpdatedInfo(prev=>({...prev,amount:"3500"}))} text="&#8358;3,500" />
                                    <ClickButton variant={`${amount==="5000"?"clicked" : "unclicked"}`} click={()=>setUpdatedInfo(prev=>({...prev,amount:"5000"}))} text="&#8358;5,000" />
                                    <ClickButton variant={`${amount==="10000"?"clicked" : "unclicked"}`} click={()=>setUpdatedInfo(prev=>({...prev,amount:"10000"}))} text="&#8358;10,000" />
                                </div>
                                <div style={{display:"flex",width:"100%",justifyContent:"center",marginTop:"50px"}}>
                                    <ClickButton 
                                    variant="secondary" 
                                    narrow 
                                    text="Proceed with Application" 
                                    click={()=>{
                                        setShowModalContent("second")
                                    }}/>
                                </div>
                            </div> 

                        </div>}
                        {showModalContent==="second"&&<div className="complete-account-registration">
                            <h5 className={paragraph} style={{textAlign:"center", margin:"20px"}}>
                                Complete Account Registration
                            </h5>
                            <Divider/>
                           <div className={main_container_centered}>
                                <p className={paragraph}>You are almost there, we just need you to fill the form below.</p><br/>
                                <form className={form_container}>
                                    <input required type="text" onChange={handleChange} placeholder="Wale" name="firstName" className={input_style}/>
                                    <input required type="text" onChange={handleChange} placeholder="Adenuga" name="lastName" className={input_style}/>
                                    <Select options={options} placeholder="Bank Name" name="Bank Name" onChange={handleSelectChange} />
                                    <input required type="number" onChange={handleChange} placeholder="Account Number" name="accountNumber" className={input_style}/>
                                    <input required type="number" onChange={handleChange} placeholder="BVN" name="bvn" className={input_style}/>
                                    <ClickButton variant="secondary" narrow text="Proceed with Application" click={(e)=>{
                                        e.preventDefault();
                                       if(!firstName || !lastName || !amount || !accountNumber || !bvn || !bankName){
                                           alert.show("Please fill in all forms")
                                       }else{
                                           setShowModalContent("third")
                                        }
                                       
                                    }}/>
                                </form>
                           </div>
                        </div>}
                        {showModalContent==="third"&&<div className="verify-your-bvn">
                            <h5 className={paragraph} style={{textAlign:"center", margin:"20px"}}>
                                Verify your BVN
                            </h5>
                            <Divider/>
                            <div className={main_container}>
                                <p className={paragraph}>We have sent a One Time Password (OTP) to the phone number attached to your BVN. Kindly enter it below.</p><br/>
                                <input required type="number" placeholder="OTP" name="otp" className={input_style}/>
                                <div style={{display:"flex",width:"100%",justifyContent:"center",marginTop:"50px"}}>
                                    <ClickButton variant="secondary" narrow text="Verify" click={()=>setShowModalContent("fourth")}/>
                                </div>
                                
                            </div>
                        </div>}
                        {showModalContent==="fourth"&&<div className="success">
                            <h5 className={paragraph} style={{textAlign:"center", margin:"20px"}}>
                                Success!!!
                            </h5>
                            <Divider/>
                           <div className={main_container_centered}>
                                <p className={paragraph}>You have now successfully verified your account.</p>
                                <div style={{display:"flex",width:"100%",justifyContent:"center",marginTop:"50px"}}>
                                    <ClickButton variant="secondary" narrow text="Continue" click={()=>setShowModalContent("fifth")}/>
                                </div>
                           </div>
                        </div>}
                        {showModalContent==="fifth"&&<div className="confirm-loan-application">
                            <h5 className={paragraph} style={{textAlign:"center", margin:"20px"}}>
                                Confirm Loan Application
                            </h5>
                            <Divider/>
                            <div className={main_container_centered}>
                                <div className={main_container_centered}>
                                    <div className={table_container}>
                                        <p className={paragraph}>Loan Amount</p>
                                        <p className={paragraph}>{`₦${amount}`}</p>
                                        <p className={paragraph}>Interest Due</p>
                                        <p className={paragraph}>₦500</p>
                                        <p className={paragraph}>Total Refund Due</p>
                                        <p className={paragraph}>{`₦${Number(amount)+500}`}</p>
                                        <p className={paragraph}>Repayment Date</p>
                                        <p className={paragraph}>8 May, 2022</p>
                                    </div>
                                </div>
                                <ClickButton variant="secondary" narrow text="Confirm" click={()=>{
                                    dispatch(requestLoan(updatedInfo))
                                    if (error) {
                                        alert.error(error)
                                    }else{
                                        setShowModalContent("sixth")
                                    }
                                    
                                    }}/>
                            </div>
                        </div>}
                        {showModalContent==="sixth"&&<div className="your-loan-application-was-successful!">
                            <h5 className={paragraph} style={{textAlign:"center", margin:"20px"}}>
                                Your Loan Application was Successful!
                            </h5>
                            <Divider/>
                            <div className={main_container_centered}>
                                <p className={paragraph}>Congratulations! Your loan will be credited to your bank account within 10 minutes</p>
                                <div style={{display:"flex",width:"100%",justifyContent:"center",marginTop:"50px"}}>
                                    <ClickButton variant="secondary" narrow text="Proceed to Dashboard" click={()=>setOpen(false)} />
                                </div>
                            </div>
                        </div>}
                    </Box>
                </Modal>
                <Grid container spacing={2} style={{ fontSize: ".8rem" }}>
                    <Grid
                    item
                    xs={12}
                    md={6}
                    style={{ fontSize: ".6rem" }}
                    className={grid_item}
                    >
                    <div className={dash_container}>
                        <div className={heading}>
                        <p>Quick Loan</p>
                        </div>
                        <div className={body}>
                        <p>Need urgent cash?</p>
                        <p>You are just one click away</p>
                        <div className={apply}>
                            <ClickButton
                                variant="secondary"
                                narrow
                                text="Apply for loan"
                                click={handleOpen}
                            />
                        </div>
                        </div>
                    </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <div className={dash_container}>
                        <div className={heading}>
                        <p>Loan Details</p>
                        </div>
                        <div className={body}>
                        <Grid container spacing={3.7}>
                            {loanDetails.map((item) => (
                            <>
                                <Grid
                                item
                                xs={6}
                                style={{ fontSize: ".6rem" }}
                                className={grid_item}
                                >
                                {item.label}
                                </Grid>
                                <Grid
                                item
                                xs={6}
                                style={{ fontSize: ".6rem" }}
                                className={grid_item}
                                >
                                {item.price}
                                </Grid>
                            </>
                            ))}
                        </Grid>
                        </div>
                    </div>
                    </Grid>
                </Grid>
                </Container>
                <Container>
                <div className={cta}>
                    <p>Quick Actions</p>
                    <Grid container spacing={3}>
                    <Grid item xs={12} md={4} className={grid_item}>
                        <ClickButton variant="ocean" narrow text="Repay Loan" />
                    </Grid>
                    <Grid item xs={12} md={4} className={grid_item}>
                        <ClickButton variant="neon" narrow text="Build Credit Score" />
                    </Grid>
                    <Grid item xs={12} md={4} className={grid_item}>
                        <ClickButton
                        variant="primary"
                        narrow
                        text="Referral Earnings"
                        />
                    </Grid>
                    </Grid>
                </div>
                </Container>
                <Container>
                <div className={recent}>
                    <p>Recent Transactions</p>
                     {loanHistory ? (loanHistory.map((history)=>(
                        <div className={loanHistory_container}>
                            <div className={loan_image_container}>
                                <img src={orange} alt="loan " />
                                <p style={{fontSize:"1.2rem",lineHeight:"30px",font:"lato"}}>Loan Disbursed<span><p>{String(history.createdAt).substring(0,10)}</p></span></p>
                            </div>
                            <h4 className={paragraph}>{`+ ₦${history.amount}`}</h4>
                        </div>
                    ))):(
                        <p>
                            You have not made any transaction yet. When you take a loan or
                            make a repayment, the details of your transaction will appear here
                        </p>
                    )}
                </div>
                </Container>
            </Box>
        </>
    )
}

export default DashboardHome
