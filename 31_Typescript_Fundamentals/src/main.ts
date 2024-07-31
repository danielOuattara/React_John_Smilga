import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
// import "./courses/_01_type_annotations";
// import "./courses/_02_type_inference";
// import "./courses/_03_challenge";
// import "./courses/_04_union_types";
// import "./courses/_05_type_any";
// import "./courses/_06_practical_example.ts";
// import "./courses/_07_challenge.ts";
// import "./courses/_08_Arrays";
// import "./courses/_09_challenge.ts";
// import "./courses/_10_objects.ts";
// import "./courses/_11_objects_challenge.ts";
// import "./courses/_12_functions.ts";
// import "./courses/_13_functions_challenges.ts";
// import "./courses/_14_functions_optional_and_default_params.ts";
// import "./courses/_15_function_rest_parameters.ts";
// import "./courses/_16_function_void_keyword.ts";
// import "./courses/_17_function_type_guards.ts";
// import "./courses/_18_function_object_as_parameters.ts";
// import "./courses/_19_function_object_excess_property_check .ts";
// import "./courses/_20_function_challenge.ts";
// import "./courses/_21_types_alias.ts";
// import "./courses/_22_types_alias_challenge.ts";
// import "./courses/_23_intersection_type.ts";
// import "./courses/_24_computed_types_properties.ts";
// import "./courses/_25_interface.ts";
// import "./courses/_26_interface_and_methods.ts";
// import "./courses/_27_interface_and_methods_more_options.ts";
// import "./courses/_28_interface_challenge.ts";
// import "./courses/_29_interface_merging_and_extending";
// import "./courses/_30_interface_challenge";
// import "./courses/_31_type_predicate";
// import "./courses/_32_interface_VS_alias";
// import "./courses/_33_tuples.ts";
// import "./courses/_34_enums.ts";
// import "./courses/_35_enums_reverse_mapping.ts";
// import "./courses/_36_challenge_Tuple_Enum.ts";
// import "./courses/_37_types_assertion.ts";
// import "./courses/_38_type_unknown.ts";
// import "./courses/_39_type_never.ts";
// import "./courses/_40_modules.ts";
// import "./courses/_41_challenge_type_guards.ts";
// import "./courses/_42_challenge_type_guards_equality_narrowing.ts";
// import "./courses/_43_challenge_type_guards_check_for_property.ts";
// import "./courses/_44_challenge_truthy_falsy_guard.ts";
// import "./courses/_45_challenge_instanceof_type_guard";
// import "./courses/_46_challenge_type_predicate.ts";
// import "./courses/_47_type_never_gotcha.ts";
// import "./courses/_48_challenge_discriminated_unions_and_exhaustive_check_using_the_never_type.ts";
// import "./courses/_49_generics_intro.ts";
// import "./courses/_50_create_generic_function_and_interface.ts";
// import "./courses/_51_generic_promise_example.ts";
// import "./courses/_52_generics_generate_array.ts";
// import "./courses/_53_generic_multiple_types.ts";
// import "./courses/_54_generics_inferred_type_and_type_constraints.ts";
// import "./courses/_55_generic_type_constraint_example_2.ts";
// import "./courses/_56_generic_default_types.ts";
// import "./courses/_57_fetch_data_basic_insufficient.ts";
// import "./courses/_58_challenge_fetch_data_typescript_perfect.ts";
// import "./courses/_59_challenge_fetch_data_and_Zod_library.ts";
// import "./courses/_60_challenge_fetch_data_and_Valibot_library.ts";
// import "./courses/_61_typescript_declaration_files.ts";
// import "./courses/_63_classes_intro.ts";
// import "./courses/_64_classes_default_properties.ts";
// import "./courses/_65_classes_readonly_access_modifier.ts";
// import "./courses/_66_classes_private_public_access_modifiers.ts";
// import "./courses/_67_classes_constructor_shortcut.ts";
// import "./courses/_68_classes_getters_and_setters.ts";
// import "./courses/_69_classes_implement_interfaces.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="tasks-v1">
      Tasks version 1
    </a>

    &nbsp; &nbsp;
    <a href="tasks-v2">
      Tasks version 2
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
