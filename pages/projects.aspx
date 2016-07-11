<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="projects.aspx.cs" Inherits="pages_Projects" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
    <link href="../css/projects.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder" Runat="Server">
    <div id="asteroids">
        <asp:Button ID="asteroidsGoto" runat="server" onclick="asteroidsGoto_Click" Text="See more" CssClass="button" />
    </div>
    <div id="wallpapers">
        <asp:Button ID="wallpapersGoto" runat="server" onclick="wallpapersGoto_Click" Text="See more" CssClass="button" />
    </div>
    <div id="sql">
        <asp:Button ID="sqlGoto" runat="server" onclick="sqlGoto_Click" Text="Coming soon" CssClass="buttonDis" />
    </div>
</asp:Content>