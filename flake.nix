{
  description =
    "A portfolio website for the NOAA Water Column Sonar capstone project";

  inputs = { nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable"; };

  outputs = { self, nixpkgs }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in {
      devShells.${system} = {
        default = pkgs.mkShell {
          packages = with pkgs; [ nodejs nodePackages_latest.vercel ];
        };
      };
    };
}
