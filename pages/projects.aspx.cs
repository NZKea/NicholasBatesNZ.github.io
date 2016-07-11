using System;

public partial class pages_Projects : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        sqlGoto.Enabled = false;
    }

    protected void asteroidsGoto_Click(object sender, EventArgs e)
    {
        Response.Redirect("/pages/projects/asteroids.aspx");
    }

    protected void wallpapersGoto_Click(object sender, EventArgs e)
    {
        Response.Redirect("/pages/projects/wallpapers.aspx");
    }

    protected void sqlGoto_Click(object sender, EventArgs e) { }
}