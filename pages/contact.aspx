<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="contact.aspx.cs" Inherits="pages_Contact" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder" Runat="Server">
    <asp:TextBox id="name" runat="server" placeholder="Name"></asp:TextBox>
    <asp:TextBox id="email" runat="server" placeholder="Email"></asp:TextBox>
    <asp:TextBox id="subject" runat="server" placeholder="Subject"></asp:TextBox>
    <asp:TextBox id="message" runat="server" placeholder="Message" TextMode="MultiLine"></asp:TextBox>
    <asp:Button ID="submit" runat="server" OnClick="submit_Click" Text="Submit" />
    <asp:Label ID="errorStatus" runat="server" Text=""></asp:Label>
</asp:Content>