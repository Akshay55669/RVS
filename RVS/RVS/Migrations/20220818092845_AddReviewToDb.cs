using Microsoft.EntityFrameworkCore.Migrations;

namespace RVS.Migrations
{
    public partial class AddReviewToDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Reviews",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(maxLength: 300, nullable: true),
                    CompanyName = table.Column<string>(maxLength: 300, nullable: true),
                    Designation = table.Column<string>(maxLength: 300, nullable: true),
                    Reviews = table.Column<string>(maxLength: 1000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reviews", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Reviews");
        }
    }
}
