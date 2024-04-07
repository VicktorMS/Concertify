import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <HelpOutlineIcon
        onClick={handleClickOpen}
        style={{ cursor: "pointer" }}
      />
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Ajuda e Contato
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Este projeto foi desenvolvido como parte do projeto de bloco pelos
            alunos do Instituto INFNET.
          </Typography>
          <Typography gutterBottom>
            Se você encontrar algum problema com o funcionamento do aplicativo,
            pedimos que entre em contato conosco por meio da opção "Enviar
            Email" e descreva detalhadamente o problema que está enfrentando.
            Faremos o possível para resolver o problema o mais rápido possível.
          </Typography>
          <Typography gutterBottom>
            Autores do projeto: Alexsandro Salles, Ruan Campelo, William Piezeta
            e Victor de Moraes.
          </Typography>
          <Typography gutterBottom>
            Agradecemos seu interesse em nosso aplicativo e estamos ansiosos
            para receber seu feedback.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            href="mailto:victor.moraesrj@gmail.com?subject=Assunto do email&cc=victor.moraesrj@gmail.com?&bcc=victor.moraesrj@gmail.com?&body=Conteúdo do email que será preenchido automaticamente"
          >
            Enviar Email
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
