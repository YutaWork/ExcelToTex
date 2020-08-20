document.getElementById("text-button").onclick = function() {
    let input_text = document.form1.input.value;
    let output_text = input_text.replace(/r?\n/g,"\\\\\n");
    output_text = output_text.replace(/r?\t/g," & ");
    output_text = output_text.replace(/r?\\\\\n$/,"");
    output_text = "\\begin{table}[htbp]\n\\centering\n\\caption{title}\n\\begin{tabular}{}\\hline\n" 
                + output_text + " \\hline\n\\end{tabular}\n\\end{table}";
    document.form2.output.value = output_text;
};