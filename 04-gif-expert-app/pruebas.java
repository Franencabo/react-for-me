public class Profesores {
   //Atributos
   private String nombre;
   private String curso;
   //Métodos GET y SET
   public String getNombre() {return nombre;}
   public void - 1 -Nombre(String nombre) {
    this.nombre = - 2 -;
    }
   public String 
get
 Curso() {return curso;}
   public void 
set
 Curso(String curso) {this.curso = 
curso
 ;}
   //Métodos creados por el programador
   public double Evaluar(double nota) {
      nota = nota * 0.8;
      return nota;
   }
}